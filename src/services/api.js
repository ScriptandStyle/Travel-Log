import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth functions
export const verifyToken = async (token) => {
  try {
    const response = await api.post('/auth/verify', { token });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Experience functions
export const getExperiences = async () => {
  try {
    const response = await api.get('/experiences');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createExperience = async (experienceData) => {
  try {
    const response = await api.post('/experiences', experienceData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const likeExperience = async (experienceId) => {
  try {
    const response = await api.post(`/experiences/${experienceId}/like`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addComment = async (experienceId, comment) => {
  try {
    const response = await api.post(`/experiences/${experienceId}/comments`, { text: comment });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Booking functions
export const createBooking = async (bookingData) => {
  try {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMyBookings = async () => {
  try {
    const response = await api.get('/bookings/my-bookings');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBooking = async (bookingId) => {
  try {
    const response = await api.get(`/bookings/${bookingId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBookingStatus = async (bookingId, status) => {
  try {
    const response = await api.patch(`/bookings/${bookingId}/status`, { status });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePaymentStatus = async (bookingId, paymentStatus) => {
  try {
    const response = await api.patch(`/bookings/${bookingId}/payment`, { paymentStatus });
    return response.data;
  } catch (error) {
    throw error;
  }
}; 