import React, { useState, useEffect, useRef } from 'react'; // Add useRef import
import './Service.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import web from '../services/web.jfif';
import seo from '../services/seo.jfif'

export default function Service() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false); // For hover effect in Web Development section



  // Create a ref for the Web Development section
  const webDevelopmentRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: 'ONE OF THE BEST UX/UI DESIGN AGENCY .',
      description: 'Phasellus vel elit efficitur, gravida libero sit amet, scelerisque tortor arcu, commodo sit amet gravida...',
      buttonLabel: 'DISCOVER MORE',
    },
    {
      id: 2,
      title: 'YOUR NEXT BIG PROJECT FOR YOUR COMPANY.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...',
      buttonLabel: 'LEARN MORE',
    },
    {
      id: 3,
      title: 'INNOVATIVE SOLUTIONS FOR YOU.',
      description: 'Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibus et magnis dis parturient...',
      buttonLabel: 'GET STARTED',
    },
  ];

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Set loaded to true on component mount
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Handle hover effect for Web Development section
  const handleHover = () => {
    if (!hovered) {
      setHovered(true);
    }
  };

  // Function to scroll to the Web Development section
  const scrollToWebDevelopment = () => {
    webDevelopmentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header />

      {/* Slide section */}
      <div className={`service-hero-section ${loaded ? 'loaded' : ''}`}>
        <div className="service-slide-content">
          <h1>{slides[activeSlide].title}</h1>
          <p>{slides[activeSlide].description}</p>
          <button className="service-cta-button">{slides[activeSlide].buttonLabel}</button>
        </div>
        <div className="service-slide-navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`service-nav-bar ${activeSlide === index ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
            >
              {activeSlide === index && <span className="label">{index + 1}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Pass the scroll function to ServiceCard */}
      <section>
        <ServiceCard onWebDevClick={scrollToWebDevelopment} />
      </section>

      {/* Web Development Section */}
      <section
        ref={webDevelopmentRef} // Attach the ref to the Web Development section
        className={`web-development-section ${hovered ? 'hovered' : ''}`}
        onMouseEnter={handleHover}
      >
        <div className='back-div'>
          <div className="content">
            <h1>Web Development</h1>
            <p className={`slide-left ${hovered ? 'active' : ''}`}>
              Need something changed or is there something not quite working the way you envisaged? Do you want a little old and tired made fresh and new? Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
          </div>

          <div className="planning-strategy">
            <div className="image-1">
              <img src={web} alt="Planning" />
            </div>
            <div className="text">
              <h2>Planning & Strategy</h2>
              <ul className={`slide-right ${hovered ? 'active' : ''}`}>
                <li>Research beyond the business plan</li>
                <li>The ability to turnaround consulting</li>
                <li>Help companies into more profitable</li>
                <li>Customer engagement matters</li>
              </ul>
            </div>
          </div>

          <div className="bottom-paragraph">
            <p className={`slide-left ${hovered ? 'active' : ''}`}>
              Need something changed or is there something not quite working the way you envisaged? Do you want a little old and tired made fresh and new? Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
