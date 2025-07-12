const request = require('supertest');
const mongoose = require('mongoose');
const express = require('express');
const Experience = require('../../models/Experience');
const User = require('../../models/User');
const experienceRoutes = require('../../routes/experience');
const paginationMiddleware = require('../../middleware/pagination');

// Mock Firebase admin
jest.mock('firebase-admin', () => ({
  auth: () => ({
    verifyIdToken: jest.fn().mockResolvedValue({ uid: 'test-user-id' })
  }),
  apps: ['mock-app']
}));

// Create test app
const app = express();
app.use(express.json());
app.use(paginationMiddleware);
app.use('/api/experiences', experienceRoutes);

describe('Experience Routes', () => {
  let testUser;
  
  beforeEach(async () => {
    // Create a test user
    testUser = new User({
      firebaseId: 'test-user-id',
      email: 'test@example.com',
      name: 'Test User'
    });
    await testUser.save();
  });
  
  describe('GET /api/experiences', () => {
    it('should return paginated experiences', async () => {
      // Create test experiences
      const experiences = [
        {
          title: 'Test Experience 1',
          location: 'Test Location 1',
          description: 'Test Description 1',
          author: testUser._id
        },
        {
          title: 'Test Experience 2',
          location: 'Test Location 2',
          description: 'Test Description 2',
          author: testUser._id
        }
      ];
      
      await Experience.insertMany(experiences);
      
      const res = await request(app).get('/api/experiences');
      
      expect(res.statusCode).toEqual(200);
      expect(res.body.results).toHaveLength(2);
      expect(res.body.pagination).toBeDefined();
      expect(res.body.pagination.total).toEqual(2);
    });
  });
  
  describe('POST /api/experiences', () => {
    it('should create a new experience', async () => {
      const experienceData = {
        title: 'New Experience',
        location: 'New Location',
        description: 'This is a new test experience with sufficient length'
      };
      
      const res = await request(app)
        .post('/api/experiences')
        .set('Authorization', 'Bearer valid-token')
        .send(experienceData);
      
      expect(res.statusCode).toEqual(201);
      expect(res.body.title).toEqual(experienceData.title);
      expect(res.body.author).toBeDefined();
      
      // Verify it was saved to the database
      const experience = await Experience.findById(res.body._id);
      expect(experience).toBeTruthy();
    });
    
    it('should return validation errors for invalid data', async () => {
      const invalidData = {
        title: '',
        location: 'Location',
        description: 'Short'
      };
      
      const res = await request(app)
        .post('/api/experiences')
        .set('Authorization', 'Bearer valid-token')
        .send(invalidData);
      
      expect(res.statusCode).toEqual(400);
      expect(res.body.errors).toBeDefined();
    });
  });
});
