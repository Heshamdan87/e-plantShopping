
/**
 * Paradise Nursery Shopping Application
 * 
 * Created with love by Hesham Dan
 * A modern, responsive plant shopping experience built with React and Redux
 * 
 * This application was crafted to bring the joy of gardening to everyone,
 * making it easy to find and purchase the perfect plants for your home.
 * 
 * Features:
 * - Beautiful, responsive design that works on all devices
 * - Smooth animations and transitions for a delightful user experience
 * - Comprehensive plant catalog with detailed descriptions
 * - Full shopping cart functionality with Redux state management
 * 
 * @author Hesham Dan
 * @version 1.0.0
 * @since 2025
 */

import { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

/**
 * Main App Component - The heart of Paradise Nursery
 * 
 * This component orchestrates the entire user journey from the welcoming
 * landing page to the comprehensive plant shopping experience.
 */
function App() {
  // State to manage the beautiful transition between landing and shopping
  const [showProductList, setShowProductList] = useState(false);

  /**
   * Welcome users into our plant paradise!
   * This creates a smooth, delightful transition from landing to shopping
   */
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  /**
   * Bring users back to our welcoming home page
   * Sometimes you just want to start fresh and admire the beautiful landing
   */
  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {/* 🌿 Welcome to Paradise - Our Beautiful Landing Page 🌿 */}
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          {/* The heart of our welcome message */}
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button 
              className="get-started-button" 
              onClick={handleGetStartedClick}
              aria-label="Begin your plant shopping journey"
              title="Start exploring our amazing plant collection!"
            >
              Get Started
            </button>
          </div>
          
          {/* Learn about our passion for plants */}
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>

      {/* 🛍️ Shopping Paradise - Where Plant Dreams Come True 🛍️ */}
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick} />
      </div>
    </div>
  );
}

export default App;



