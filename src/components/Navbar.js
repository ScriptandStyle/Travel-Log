// components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Travel<span>Log</span>
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/destinations" className="nav-item" onClick={() => setIsOpen(false)}>Destinations</Link>
          <Link to="/blog" className="nav-item" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" className="nav-item" onClick={() => setIsOpen(false)}>Contact</Link>
          
          {/* Conditional rendering based on auth state */}
          {currentUser ? (
            <>
              <Link to="/profile" className="nav-item" onClick={() => setIsOpen(false)}>Profile</Link>
              <button className="nav-item logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-item" onClick={() => setIsOpen(false)}>Login</Link>
              <Link to="/register" className="nav-item" onClick={() => setIsOpen(false)}>Register</Link>
            </>
          )}
        </div>
        
        <div 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;