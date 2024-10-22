import React, { useEffect, useRef } from 'react';
import './PaidCards.css'; 

export default function PaidCards() {
  const sectionRef = useRef(null); // Reference for the pricing section

  useEffect(() => {
    const section = sectionRef.current;

    // Create the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the 'in-view' class when the section is in view
            entry.target.classList.add('in-view');
          } else {
            // Optional: Remove the class when it's out of view (or you can choose to keep it)
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (section) {
      observer.observe(section); // Start observing the section
    }

    // Cleanup function
    return () => {
      if (section) {
        observer.unobserve(section); // Stop observing on component unmount
      }
    };
  }, []);

  return (
    <>
      <section className="main-sec">
        <div className="pricing-section" ref={sectionRef}>
          <h2 className="pricing-title">The Right Plan for Transparent Pricing</h2>
          <p className="pricing-description">
            We have several powerful plans to showcase your business and get discovered as a creative entrepreneur. Everything you need.
          </p>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3 className="card-title">Starter</h3>
              <p className="card-description">
                For most businesses that want to optimize web queries.
              </p>
              <ul className="features-list">
                <li>✔  All Limited Links</li>
                <li>✔  Own Analytics Platform</li>
                <li>✔  Chat Support</li>
                <li>✔  Unlimited Users</li>
              </ul>
              <div className="pricing">
                <span className="price">Free</span>
              </div>
              <button className="get-started">Get Started</button>
            </div>

            <div className="pricing-card popular-card">
              <div className="popular-badge"><b>Most Popular</b></div> {/* Badge for popular card */}
              <p className="card-description">
                Invite & collaborate with other managers.
              </p>
              <ul className="features-list">
                <li>✔  All Limited Links</li>
                <li>✔  Own Analytics Platform</li>
                <li>✔  Chat Support</li>
                <li>✔  Unlimited Users</li>
              </ul>
              <div className="pricing">
                <span className="price">$29.99</span>
              </div>
              <button className="get-started">Get Started</button>
            </div>

            <div className="pricing-card">
              <h3 className="card-title">Enterprise</h3>
              <p className="card-description">
                Assign & track your team's progress visually.
              </p>
              <ul className="features-list">
                <li>✔ All Limited Links</li>
                <li>✔  Own Analytics Platform</li>
                <li>✔  Chat Support</li>
                <li>✔  Unlimited Users</li>
              </ul>
              <div className="pricing">
                <span className="price">$39.99</span>
              </div>
              <button className="get-started">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}