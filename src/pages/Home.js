// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import baliImage from '../assets/images/bali.jpg';
import santoriniImage from '../assets/images/santorini.avif';
import kyotoImage from '../assets/images/kyoto.jpg';
import parisImage from '../assets/images/paris.jpg';
import heroImage from '../assets/images/travel-hero.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore the world with our curated travel experiences and insider tips.</p>
          <div className="hero-buttons">
            <Link to="/destinations" className="btn-primary">Explore Destinations</Link>
            <Link to="/blog" className="btn-secondary">Read Our Blog</Link>
          </div>
        </div>
      </section>

      <section className="featured-destinations">
        <h2>Featured Destinations</h2>
        <div className="destination-grid">
          {[
            { id: 1, name: 'Bali, Indonesia', image: baliImage },
            { id: 2, name: 'Santorini, Greece', image: santoriniImage },
            { id: 3, name: 'Kyoto, Japan', image: kyotoImage },
            { id: 4, name: 'Paris, France', image: parisImage }
          ].map(destination => (
            <div key={destination.id} className="destination-card">
              <div className="card-image">
                <img src={destination.image} alt={destination.name} />
                <div className="card-overlay"></div>
              </div>
              <h3>{destination.name}</h3>
              <Link to={`/destinations/${destination.id}`} className="btn-small">Explore</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>Traveler Stories</h2>
        <div className="testimonial-grid">
          {[
            { id: 1, quote: "This travel blog helped me plan the perfect trip to Japan!", author: "Sarah M." },
            { id: 2, quote: "The destination guides are incredibly detailed and accurate.", author: "James T." },
            { id: 3, quote: "Found hidden gems I would have never discovered on my own.", author: "Emma L." }
          ].map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <p>"{testimonial.quote}"</p>
              <span>- {testimonial.author}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;