import React from 'react';
import RevCards from '../revCard/RevCards';
import './ReviewSlider.css';

export default function ReviewSlider() {
  return (
    <>
    <div className="testimonial-slider">
      <div className='head-text'>
        <b><p>Meet Our Happy Clients</p></b>
      </div>
      {/* First Review Card - Right to Left */}
      <div className="testimonial-card first-card">
        <RevCards />
      </div>
      
      {/* Second Review Card - Left to Right */}
      <div className="testimonial-card second-card">
        <RevCards />
      </div>
    </div>
    </>
  );
}
