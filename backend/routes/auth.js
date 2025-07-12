const express = require('express');
const router = express.Router();
const User = require('../models/User');
const admin = require('firebase-admin');

// Check if required environment variables are present
if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PRIVATE_KEY) {
  console.error('Missing Firebase Admin SDK environment variables');
  console.log('Please check your .env file and make sure all required variables are set');
} else {
  // Initialize Firebase Admin with environment variables
  const firebaseConfig = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
  };

  try {
    admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig)
    });
    console.log('Firebase Admin SDK initialized successfully');
  } catch (error) {
    if (!/already exists/.test(error.message)) {
      console.error('Firebase initialization error:', error.stack);
    }
  }
}

// Verify Firebase token and create/update user
router.post('/verify', async (req, res) => {
  try {
    const { token, userData } = req.body;
    
    // Check if Firebase Admin is initialized
    if (!admin.apps.length) {
      return res.status(500).json({ message: 'Firebase Admin not initialized' });
    }

    // Verify the Firebase token
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { uid, email, name, picture } = userData;

    // Verify that the token matches the user data
    if (decodedToken.uid !== uid) {
      return res.status(401).json({ message: 'Token does not match user data' });
    }

    let user = await User.findOne({ firebaseId: uid });
    
    if (!user) {
      user = new User({
        firebaseId: uid,
        email,
        name: name || email.split('@')[0],
        profilePicture: picture
      });
      await user.save();
    } else {
      user.name = name || user.name;
      user.profilePicture = picture || user.profilePicture;
      await user.save();
    }

    res.json({ user });
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
});

module.exports = router; 