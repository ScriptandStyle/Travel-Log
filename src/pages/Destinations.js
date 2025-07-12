// pages/Destinations.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Destinations.css';
import baliImage from '../assets/images/bali.jpg';
import santoriniImage from '../assets/images/santorini.avif';
import kyotoImage from '../assets/images/kyoto.jpg';
import parisImage from '../assets/images/paris.jpg';
import machuPicchuImage from '../assets/images/machu-picchu.webp';
import serengetiImage from '../assets/images/serengeti.jpg';
import newYorkImage from '../assets/images/new-york.jpg';
import greatBarrierReefImage from '../assets/images/great-barrier-reef.webp';
import destinationsHeroImage from '../assets/images/travel-destinations.jpg';

const Destinations = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const destinations = [
    { 
      id: 1, 
      name: 'Bali, Indonesia', 
      image: baliImage, 
      category: 'beach', 
      rating: 4.8,
      cost: '$$$',
      duration: '7-10 days'
    },
    { 
      id: 2, 
      name: 'Santorini, Greece', 
      image: santoriniImage, 
      category: 'beach', 
      rating: 4.9,
      cost: '$$$$',
      duration: '5-7 days'
    },
    { 
      id: 3, 
      name: 'Kyoto, Japan', 
      image: kyotoImage, 
      category: 'cultural', 
      rating: 4.7,
      cost: '$$$$',
      duration: '7-14 days'
    },
    { 
      id: 4, 
      name: 'Paris, France', 
      image: parisImage, 
      category: 'city', 
      rating: 4.6,
      cost: '$$$',
      duration: '4-7 days'
    },
    { 
      id: 5, 
      name: 'Machu Picchu, Peru', 
      image: machuPicchuImage, 
      category: 'adventure', 
      rating: 4.9,
      cost: '$$',
      duration: '10-14 days'
    },
    { 
      id: 6, 
      name: 'Serengeti, Tanzania', 
      image: serengetiImage, 
      category: 'wildlife', 
      rating: 4.8,
      cost: '$$$$',
      duration: '7-10 days'
    },
    { 
      id: 7, 
      name: 'New York, USA', 
      image: newYorkImage, 
      category: 'city', 
      rating: 4.5,
      cost: '$$$',
      duration: '5-7 days'
    },
    { 
      id: 8, 
      name: 'Great Barrier Reef, Australia', 
      image: greatBarrierReefImage, 
      category: 'beach', 
      rating: 4.7,
      cost: '$$$',
      duration: '7-10 days'
    }
  ];

  const filteredDestinations = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeFilter);

  return (
    <div className="destinations-page">
      <section className="destinations-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${destinationsHeroImage})` }}>
        <h1>Explore Our Destinations</h1>
        <p>Find your perfect getaway from our curated collection of travel spots</p>
      </section>

      <section className="destinations-content">
        <div className="filter-buttons">
          <button className={activeFilter === 'all' ? 'active' : ''} onClick={() => setActiveFilter('all')}>All</button>
          <button className={activeFilter === 'beach' ? 'active' : ''} onClick={() => setActiveFilter('beach')}>Beach</button>
          <button className={activeFilter === 'city' ? 'active' : ''} onClick={() => setActiveFilter('city')}>City</button>
          <button className={activeFilter === 'cultural' ? 'active' : ''} onClick={() => setActiveFilter('cultural')}>Cultural</button>
          <button className={activeFilter === 'adventure' ? 'active' : ''} onClick={() => setActiveFilter('adventure')}>Adventure</button>
          <button className={activeFilter === 'wildlife' ? 'active' : ''} onClick={() => setActiveFilter('wildlife')}>Wildlife</button>
        </div>

        <div className="destinations-grid">
          {filteredDestinations.map(destination => (
            <div key={destination.id} className="destination-card">
              <div className="card-image">
                <img src={destination.image} alt={destination.name} />
                <div className="destination-info">
                  <div className="rating">
                    <span className="star">★</span> 
                    <span className="rating-value">{destination.rating}</span>
                  </div>
                  
                </div>
              </div>
              <div className="card-content">
                <h3>{destination.name}</h3>
                <div className="button-container">
                  <Link to={`/destination/${destination.id}`} className="btn-explore">
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destinations;