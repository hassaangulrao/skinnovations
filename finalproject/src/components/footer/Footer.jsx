import React from 'react';
import './Footer.css'; 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Details */}
        <div className="footer-section">
          <h3>Contact Details</h3>
          <p><strong><u>Location:</u></strong> <br /><br />18065 apple ridge drive,<br /><br /> dallas texas 75287</p>
          <p><strong><u>Phone:</u></strong> <br /><br />+1 (469) 883-3450</p>
          <p><strong><u>Email:</u></strong> <br /><br />info@nexatechsolution.us</p>
        </div>

        {/* Our Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Unique Branding Services</li>
            <li>Web Design & Development</li>
            <li>LogoDesign</li>
            <li>Video Edit & Animation</li>
            <li>Search Engine Optimization</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className='Quick-Adjust'>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>

          {/* Social Icons */}
          <div className="social-icons">
            <FacebookOutlinedIcon />
            <XIcon />
            <YouTubeIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <hr />
        <p>&copy; 2024 Nexatech Solution. All rights reserved</p>
      </div>
    </footer>
  );
}
