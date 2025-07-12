// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6pe4TMSp1gd9uk7l99gsmv5W6gPkQEwQ",
  authDomain: "travel-log-82ef8.firebaseapp.com",
  projectId: "travel-log-82ef8",
  storageBucket: "travel-log-82ef8.appspot.com",
  messagingSenderId: "922188973626",
  appId: "1:922188973626:web:38b93480db4abc0a30d703"
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Export the initialized services
export { auth, googleProvider };
export default app;