import React, { useEffect, useRef, useState } from 'react';
import './Cards.css';
import logodesign from '../cards/logodesign.png';
import web from '../cards/web-design.png';
import cut from '../cards/cut.png';
import seo from '../cards/seo.png';
import digital from '../cards/marketing.png';
import brand from '../cards/business-card.png';

export default function Cards() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const container = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visibility to true when in view
          } else {
            setIsVisible(false); // Reset visibility when out of view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  const cardData = [
    {
      title: "Unique Branding Services",
      description: "Convert data noise intelligently for a quis lorem.",
      icon: brand,
    },
    {
      title: "Web Design & Development",
      description: "Convert data noise intelligently for a quis lorem.",
      icon: web,
    },
    {
      title: "Logo Design",
      description: "Convert data noise intelligently for a quis lorem.",
      icon: logodesign,
    },
    {
      title: "Video Edit & Animation",
      description: "Convert data noise intelligently for a quis lorem.",
      icon: cut,
    },
    {
      title: "Search Engine Optimization",
      description: "Generates suggestions for ad on targeting on ad.",
      icon: seo,
    },
    {
      title: "Digital Marketing",
      description: "Rewrites your text and says things a different way.",
      icon: digital,
    },
  ];

  return (
    <div className={`cards-container ${isVisible ? 'in-view' : ''}`} ref={containerRef}>
      {cardData.map((card, index) => (
        <div key={index} className={`card ${isVisible ? 'visible' : ''}`}>
          <div className="card-icon">
            <img src={card.icon} alt={`${card.title} icon`} />
          </div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <div className="arrow">
            <span>&rarr;</span>
          </div>
        </div>
      ))}
    </div>
  );
}
