/**
 * AboutUs Component - Information about Paradise Nursery
 * 
 * This component displays company information and mission statement
 * on the landing page of the application.
 */

import './AboutUs.css';

/**
 * AboutUs Component - Company information and mission
 * Provides details about Paradise Nursery's mission and services
 */
function AboutUs() {
  return (
    <div className="about-us-container">
      <p className="about-us-description">
        Welcome to Paradise Nursery, where green meets serenity!
      </p>
      
      <p className="about-us-content">
        At Paradise Nursery, we are passionate about bringing nature closer to you. 
        Our mission is to provide a wide range of high-quality plants that not only 
        enhance the beauty of your surroundings but also contribute to a healthier and 
        more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, 
        we have something for every plant enthusiast.
      </p>
      
      <p className="about-us-content">
        Our team of experts is dedicated to ensuring that each plant meets our strict 
        standards of quality and care. Whether you&apos;re a seasoned gardener or just 
        starting your green journey, we&apos;re here to support you every step of the way. 
        Feel free to explore our collection, ask questions, and let us help you find 
        the perfect plant for your home or office.
      </p>
      
      <p className="about-us-content">
        Join us in our mission to create a greener, healthier world. Visit Paradise 
        Nursery today and experience the beauty of nature right at your doorstep.
      </p>

      {/* Contact Information Section */}
      <div className="contact-section">
        <h3 className="contact-heading">📧 Get in Touch</h3>
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">👤</span>
            <span className="contact-text">Hesham Al dandan</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span className="contact-text">Heshamdan2014@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <span className="contact-text">+49 15773127109</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span className="contact-text">Kassel, Germany</span>
          </div>
        </div>
        <p className="contact-message">
          Have questions about our plants? Need gardening advice? We&apos;d love to hear from you!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
