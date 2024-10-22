import React, { useState, useEffect } from 'react';
import './ServiceCard.css';

const services = [
  { name: 'WEB DEVELOPMENT', icon: '🌐' },
  { name: 'SEO & CONTENT WRITING', icon: '✍️' },
  { name: 'MODERN DESIGN', icon: '🎨' },
  { name: 'MARKETING STRATEGY', icon: '📊' },
  { name: 'GRAPHIC DESIGNING', icon: '🖼️' },
  { name: 'GRAPHIC DESIGNING', icon: '🖼️' },
  { name: 'WEB DEVELOPMENT', icon: '🌐' },
  { name: 'SEO & CONTENT WRITING', icon: '✍️' },
  { name: 'MODERN DESIGN', icon: '🎨' },
  { name: 'MARKETING STRATEGY', icon: '📊' }
];

const ServiceCard = ({ onWebDevClick }) => {
  const servicesPerPage = 5; // Number of services per page
  const totalPages = Math.ceil(services.length / servicesPerPage);
  const [activeService, setActiveService] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [showContent, setShowContent] = useState(false); // New state for visibility

  // Automatic slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPageIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [totalPages]);

  useEffect(() => {
    // Set content to show after 100ms for animation effect
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  const handlePageChange = (index) => {
    setPageIndex(index);
  };

  const handleCardClick = (serviceName) => {
    if (serviceName === 'WEB DEVELOPMENT') {
      onWebDevClick(); // Scroll to Web Development section
    }
  };

  return (
    <section className="services-section">
      {showContent && ( // Render content only when showContent is true
        <>
          <h2>SERVICES WE ARE OFFERING</h2>
          <h3>We Design Digital Products That Help Grow Businesses.</h3>
          <p>We are committed to providing our customers with exceptional service while offering our employees the best training.</p>
        </>
      )}

      <div className="services-cards">
        {services.slice(pageIndex * servicesPerPage, (pageIndex + 1) * servicesPerPage).map((service, index) => (
          <div
            key={index}
            className={`service-card ${activeService === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveService(index)}
            onMouseLeave={() => setActiveService(null)}
            onClick={() => handleCardClick(service.name)} // Trigger scroll on card click
          >
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon">{service.icon}</div>
                <p>{service.name}</p>
              </div>
              <div className="service-card-back">
                <div className="service-icon">{service.icon}</div>
                <p>{service.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="indicator-dots">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            className={`dot ${pageIndex === index ? 'active' : ''}`}
            onClick={() => {
              handlePageChange(index);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
