import React, { useEffect, useState } from 'react';
import './About.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function About() {
    const [isRevealed, setIsRevealed] = useState(false);
    const [projects, setProjects] = useState(0);
    const [people, setPeople] = useState(0);
    const [years, setYears] = useState(0);
    const [offices, setOffices] = useState(0);

    const handleMouseEnter = () => {
        if (!isRevealed) {
            setIsRevealed(true);
        }
    };

    useEffect(() => {
        const aboutContent = document.querySelector('.about-content');
        if (isRevealed) {
            aboutContent.classList.add('revealed');
        }
    }, [isRevealed]);

    useEffect(() => {
        if (isRevealed) {
            const incrementNumbers = (setFunc, target, duration) => {
                let start = 0;
                const stepTime = Math.abs(Math.floor(duration / target));

                const timer = setInterval(() => {
                    start += 1;
                    setFunc(start);
                    if (start >= target) {
                        clearInterval(timer);
                    }
                }, stepTime);
            };

            incrementNumbers(setProjects, 100, 4000);
            incrementNumbers(setPeople, 75, 4000);
            incrementNumbers(setYears, 15, 4000);
            incrementNumbers(setOffices, 20, 4000);
        }
    }, [isRevealed]);

    return (
        <div className='body'>
            <Header />
            <div className="background-image">
                <h1><b>About us</b></h1>
                <p>
                    <span>At Nexatech Solutions, we are dedicated to transforming your vision into reality</span>
                    <span>through innovative technology and exceptional service.</span>
                </p>
            </div>
            <div className="about-content" onMouseEnter={handleMouseEnter}>
                <div className='AboutUs-Div'>
                    <p className="about-heading">ABOUT US</p>
                    <h1>We improve your online presence</h1>
                    <p className="about-description">
                        We have been doing what we love for the past 12 years. Our experience and intrinsic drive to fulfill clients’ demands have led us to establish a digital agency of our own. We are dedicated to providing scalable results based on R&D strategies and digital solutions.
                    </p>
                </div>
                <div className="progress-section">
                    <div className="progress-bars-container">
                        <div className="progress-bar">
                            <span className="label">Optimization</span>
                            <ProgressBar
                                now={isRevealed ? 80 : 0}
                                label={`${isRevealed ? 80 : 0}%`}
                                variant="black"
                            />
                        </div>
                        <div className="progress-bar">
                            <span className="label">Branding</span>
                            <ProgressBar
                                now={isRevealed ? 90 : 0}
                                label={`${isRevealed ? 90 : 0}%`}
                                variant="black"
                            />
                        </div>
                        <div className="progress-bar">
                            <span className="label">Planning</span>
                            <ProgressBar
                                now={isRevealed ? 85 : 0}
                                label={`${isRevealed ? 85 : 0}%`}
                                variant="black"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-div" onMouseEnter={handleMouseEnter}>
                <div className={`mission-section ${isRevealed ? 'revealed' : ''}`}>
                    <div className="mission-header">
                        <h3><b>HUGE HONOR</b></h3>
                        <h1><b>Our Mission</b></h1>
                        <p className='para'>To expand our operations throughout the globe while maintaining the highest quality of services.</p>
                    </div>
                    <div className="mission-details">
                        <div className="detail-column">
                            <h2><b>Proactivity</b></h2>
                            <p>Everyone on our team is dedicated to upholding the values of trust, honesty, transparency, and agility to identify problems and anticipate effective solutions.</p>
                        </div>
                        <div className="detail-column">
                            <h2><b>Our Values</b></h2>
                            <p>We value your privacy and respect your decisions. We do not miscommunicate with anyone and ensure that the deliverables are up to your expectations.</p>
                        </div>
                        <div className="detail-column">
                            <h2><b>Transparency</b></h2>
                            <p>As always, we have an open-door policy, so please do not hesitate to contact us at any time with inquiries or to have a conversation about your specific requirements.</p>
                        </div>
                        <div className="detail-column">
                            <h2><b>Innovations</b></h2>
                            <p>We don't just believe in technology; instead, we work with them to bring you results with the highest caliber of standards.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='exp-div'>
            <div className="experience-section">
                <div className="experience-content">
                    <h5>PERFECT SOLUTIONS</h5>
                    <h1>Our Pride – Leveraging 12 years of experience</h1>
                    <p>
                        Since the company's inception, one of our greatest sources of pride has been our capacity to meet each and every one of our customers’ requirements in terms of design, development, content creation, marketing, and even consultation practices.
                    </p>
                </div>
                <div className="stats-section">
                    <div className="stat-item">
                        <h2>{projects}</h2>
                        <p>Projects</p>
                    </div>
                    <div className="stat-item">
                        <h2>{people}</h2>
                        <p>People</p>
                    </div>
                    <div className="stat-item">
                        <h2>{years}</h2>
                        <p>Years</p>
                    </div>
                    <div className="stat-item">
                        <h2>{offices}</h2>
                        <p>Offices</p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}
