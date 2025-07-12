import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { createBooking } from '../services/api';
import '../styles/Booking.css';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    bookingDate: '',
    numberOfPeople: 1,
    specialRequests: '',
    contactInfo: {
      name: '',
      email: '',
      phone: ''
    }
  });

  useEffect(() => {
    // Fetch destination details
    const fetchDestination = async () => {
      try {
        const response = await fetch(`/api/destinations/${id}`);
        const data = await response.json();
        setDestination(data);
      } catch (error) {
        setError('Failed to load destination details');
      }
    };

    fetchDestination();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const bookingData = {
        destination: id,
        ...formData,
        totalPrice: destination.price * formData.numberOfPeople
      };

      await createBooking(bookingData);
      navigate('/my-bookings');
    } catch (error) {
      setError('Failed to create booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!destination) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h1>Book {destination.name}</h1>
        <p className="price">${destination.price} per person</p>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="bookingDate">Booking Date</label>
          <input
            type="date"
            id="bookingDate"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="form-group">
          <label htmlFor="numberOfPeople">Number of People</label>
          <input
            type="number"
            id="numberOfPeople"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactInfo.name">Full Name</label>
          <input
            type="text"
            id="contactInfo.name"
            name="contactInfo.name"
            value={formData.contactInfo.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactInfo.email">Email</label>
          <input
            type="email"
            id="contactInfo.email"
            name="contactInfo.email"
            value={formData.contactInfo.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactInfo.phone">Phone Number</label>
          <input
            type="tel"
            id="contactInfo.phone"
            name="contactInfo.phone"
            value={formData.contactInfo.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div className="booking-summary">
          <h3>Booking Summary</h3>
          <p>Destination: {destination.name}</p>
          <p>Number of People: {formData.numberOfPeople}</p>
          <p>Total Price: ${destination.price * formData.numberOfPeople}</p>
        </div>

        <button type="submit" className="book-button" disabled={loading}>
          {loading ? 'Processing...' : 'Book Now'}
        </button>
      </form>
    </div>
  );
};

export default Booking; 