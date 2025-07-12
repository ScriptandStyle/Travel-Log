const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const User = require('../models/User');
const admin = require('firebase-admin');
const { experienceValidationRules, commentValidationRules, validateRequest } = require('../middleware/validation');

// Middleware to verify Firebase token
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Get all experiences
router.get('/', async (req, res) => {
  try {
    const paginatedData = await res.paginate(Experience, {}, {
      populate: { path: 'author', select: 'name profilePicture' }
    });
    
    res.json(paginatedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new experience
router.post('/', verifyToken, experienceValidationRules, validateRequest, async (req, res) => {
  try {
    const user = await User.findOne({ firebaseId: req.user.uid });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const experience = new Experience({
      ...req.body,
      author: user._id
    });
    await experience.save();
    
    const populatedExperience = await Experience.findById(experience._id)
      .populate('author', 'name profilePicture');
    
    res.status(201).json(populatedExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Like/unlike experience
router.post('/:id/like', verifyToken, async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    const user = await User.findOne({ firebaseId: req.user.uid });
    
    if (!experience || !user) {
      return res.status(404).json({ message: 'Experience or user not found' });
    }

    const likeIndex = experience.likes.indexOf(user._id);
    if (likeIndex === -1) {
      experience.likes.push(user._id);
    } else {
      experience.likes.splice(likeIndex, 1);
    }
    
    await experience.save();
    res.json(experience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add comment
router.post('/:id/comments', verifyToken, commentValidationRules, validateRequest, async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    const user = await User.findOne({ firebaseId: req.user.uid });
    
    if (!experience || !user) {
      return res.status(404).json({ message: 'Experience or user not found' });
    }

    experience.comments.push({
      user: user._id,
      text: req.body.text
    });
    
    await experience.save();
    const populatedExperience = await Experience.findById(experience._id)
      .populate('author', 'name profilePicture')
      .populate('comments.user', 'name profilePicture');
    
    res.json(populatedExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 