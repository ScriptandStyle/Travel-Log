const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [{
    type: String
  }],
  price: {
    type: Number,
    required: true,
    min: 0
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  features: [{
    type: String
  }],
  availableDates: [{
    startDate: Date,
    endDate: Date,
    availableSpots: Number
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Method to calculate average rating
destinationSchema.methods.calculateAverageRating = async function() {
  if (this.reviews.length === 0) {
    this.rating = 0;
    return;
  }
  
  const sum = this.reviews.reduce((total, review) => total + review.rating, 0);
  this.rating = sum / this.reviews.length;
  await this.save();
};

module.exports = mongoose.model('Destination', destinationSchema);
