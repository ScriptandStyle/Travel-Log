import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const syncUserWithMongoDB = async (firebaseUser) => {
    if (!firebaseUser) return null;

    try {
      const token = await firebaseUser.getIdToken();
      const response = await axios.post('http://localhost:5000/api/auth/verify', {
        token,
        userData: {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName,
          picture: firebaseUser.photoURL
        }
      });
      return response.data.user;
    } catch (error) {
      console.error('Error syncing user with MongoDB:', error);
      return null;
    }
  };

  useEffect(() => {
    let unsubscribe;

    try {
      unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          const mongoUser = await syncUserWithMongoDB(firebaseUser);
          setCurrentUser({ ...firebaseUser, mongoData: mongoUser });
        } else {
          setCurrentUser(null);
        }
        setLoading(false);
      });
    } catch (error) {
      console.error('Error setting up auth state listener:', error);
      setLoading(false);
    }

    // Cleanup subscription on unmount
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const value = {
    currentUser,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 