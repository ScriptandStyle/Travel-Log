// pages/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';
import southeastAsiaImage from '../assets/images/southeast-asia.webp';
import europeImage from '../assets/images/europe.jpeg';
import ecotravelImage from '../assets/images/ecotravel.jpeg';
import foodtravelImage from '../assets/images/foodtravel.jpeg';
import travelphotographyImage from '../assets/images/travelphotography.webp';
import budgettravelImage from '../assets/images/budgettravel.webp';
import blogHeroImage from '../assets/images/travel-blog.jpg';
import travel1Image from '../assets/images/travel1.webp';
import travel2Image from '../assets/images/travel2.jpg';
import CommunitySection from '../components/CommunitySection';

const Blog = () => {
  const blogPosts = [
    { 
      id: 1, 
      title: '10 Hidden Gems in Southeast Asia', 
      excerpt: 'Discover the less-traveled paths in this beautiful region.', 
      image: southeastAsiaImage,
      date: 'May 15, 2023',
      category: 'Travel Tips'
    },
    { 
      id: 2, 
      title: 'The Ultimate Packing List for Europe', 
      excerpt: 'Never overpack again with our comprehensive guide.', 
      image: europeImage,
      date: 'April 28, 2023',
      category: 'Packing Guides'
    },
    { 
      id: 3, 
      title: 'Sustainable Travel: How to Reduce Your Footprint', 
      excerpt: 'Travel responsibly with these eco-friendly tips.', 
      image: ecotravelImage,
      date: 'April 10, 2023',
      category: 'Sustainable Travel'
    },
    { 
      id: 4, 
      title: 'Best Food Cities Around the World', 
      excerpt: 'A culinary journey through the world\'s top food destinations.', 
      image: foodtravelImage,
      date: 'March 22, 2023',
      category: 'Food & Drink'
    },
    { 
      id: 5, 
      title: 'Travel Photography Tips for Beginners', 
      excerpt: 'Capture your adventures like a pro with these simple techniques.', 
      image: travelphotographyImage,
      date: 'March 5, 2023',
      category: 'Photography'
    },
    { 
      id: 6, 
      title: 'Budget Travel: How to See More for Less', 
      excerpt: 'Smart strategies to stretch your travel budget further.', 
      image: budgettravelImage,
      date: 'February 18, 2023',
      category: 'Budget Travel'
    }
  ];

  return (
    <div className="blog-page">
      <section className="blog-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${blogHeroImage})` }}>
        <h1>Travel Blog</h1>
        <p>Insights, tips, and stories from around the world</p>
      </section>

      <section className="blog-content">
        <div className="blog-posts">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-details">
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">Read More →</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-sidebar">
          <div className="sidebar-widget">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/blog/category/travel-tips">Travel Tips</Link></li>
              <li><Link to="/blog/category/packing-guides">Packing Guides</Link></li>
              <li><Link to="/blog/category/sustainable-travel">Sustainable Travel</Link></li>
              <li><Link to="/blog/category/food-drink">Food & Drink</Link></li>
              <li><Link to="/blog/category/photography">Photography</Link></li>
              <li><Link to="/blog/category/budget-travel">Budget Travel</Link></li>
            </ul>
          </div>

          <div className="sidebar-widget">
            <h4>Popular Posts</h4>
            <div className="popular-post">
              <img src={travel1Image} alt="Popular post" />
              <div>
                <h5><Link to="/blog/1">10 Hidden Gems in Southeast Asia</Link></h5>
                <span>May 15, 2023</span>
              </div>
            </div>
            <div className="popular-post">
              <img src={travel2Image} alt="Popular post" />
              <div>
                <h5><Link to="/blog/2">The Ultimate Packing List for Europe</Link></h5>
                <span>April 28, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CommunitySection />
    </div>
  );
};

export default Blog;