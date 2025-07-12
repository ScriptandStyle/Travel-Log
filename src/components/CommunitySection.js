import React, { useState } from 'react';
import '../styles/CommunitySection.css';

const CommunitySection = () => {
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    title: '',
    location: '',
    description: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExperience(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewExperience(prev => ({
          ...prev,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newExperience.title && newExperience.description) {
      const experience = {
        ...newExperience,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        author: 'User' // In a real app, this would be the logged-in user's name
      };
      setExperiences(prev => [experience, ...prev]);
      setNewExperience({
        title: '',
        location: '',
        description: '',
        image: null
      });
    }
  };

  return (
    <div className="community-section">
      <h2>Share Your Travel Experience</h2>
      
      <form onSubmit={handleSubmit} className="experience-form">
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Title of your experience"
            value={newExperience.title}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newExperience.location}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Share your experience..."
            value={newExperience.description}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        
        <button type="submit" className="submit-btn">Share Experience</button>
      </form>

      <div className="experiences-list">
        {experiences.map(experience => (
          <div key={experience.id} className="experience-card">
            {experience.image && (
              <div className="experience-image">
                <img src={experience.image} alt={experience.title} />
              </div>
            )}
            <div className="experience-content">
              <h3>{experience.title}</h3>
              <p className="location">{experience.location}</p>
              <p className="description">{experience.description}</p>
              <div className="experience-meta">
                <span className="author">By {experience.author}</span>
                <span className="date">{experience.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitySection; 