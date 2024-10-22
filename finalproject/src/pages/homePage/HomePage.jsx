import React, { useState } from 'react';
import './HomePage.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import image1 from './img1.jfif';
import purple from '../homePage/purple.webp'
import Sliders from '../../components/slider/Sliders';
import img2 from '../homePage/img2.jfif'
import loc from '../homePage/loc.jpg'
import Cards from '../../components/cards/Cards';
import Review from '../../components/reviewsSlider/ReviewSlider';
import ReviewSlider from '../../components/reviewsSlider/ReviewSlider';
import PaidCards from '../../components/paidCards/PaidCards';

export default function HomePage() {
    const [showMessage, setShowMessage] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const handleButtonClick = () => {
        setShowMessage(!showMessage);
    };

    const handleMouseEnter = () => {
        if (!hasAnimated) {
            setHasAnimated(true);
        }
    };

    return (
        <div className='body'>
            <Header />
            <section className='First-Section'>
                <div className="content">
                    <div className="text">
                        <center>
                            <h1 className="nexatech-heading">Welcome to SK INNOVATIONS</h1>
                            <p className="nexatech-paragraph"><b>Discover the best tools for your content needs.</b></p>
                        </center>
                        <p className='dummmy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate asperiores unde aspernatur <br />in voluptates saepe temporibus non, ullam soluta commodi quis neque laboriosam laborum <br />cumque nesciunt suscipit dicta! Labore, rem.</p>
                        <p className='dummmy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate asperiores unde aspernatur <br />in voluptates saepe temporibus non, ullam soluta commodi quis neque laboriosam laborum <br />cumque nesciunt suscipit dicta! Labore, rem.</p>
                        <p className='dummmy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate asperiores unde aspernatur <br />in voluptates saepe temporibus non, ullam soluta commodi quis neque laboriosam laborum <br />cumque nesciunt suscipit dicta! Labore, rem.</p>
                        <button className="cta-button" onClick={handleButtonClick}>Get Started</button>
                       
                        <img src={purple} alt="Content tools illustration" className="section-image" />
                    </div>
                </div>
            </section>
            <section className='services'>
                <section className="second-section" onMouseEnter={handleMouseEnter}>
                    <div className={`hero ${hasAnimated ? 'animate' : ''}`}>
                        <h1>Feel organized <br /> without the effort</h1>
                        <p>Evernote helps you capture and prioritize ideas, <br /> projects, and to-do lists, so nothing falls through <br /> the cracks.</p>
                        <button className="cta-button">Sign Up For Free</button>
                    </div>
                    <div className={`devices ${hasAnimated ? 'animate' : ''}`}>
                        <div className="laptop">
                            <img src={image1} alt="Laptop" className='images' />
                            <img src={image1} alt="" className='images' />
                            <img src={image1} alt="" className='images' />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='second-part-section2'>
                        <div className="content">
                            <div className="image-container">
                                <img src={img2} alt="Placeholder for AI content illustration" className="image-placeholder" />
                            </div>
                            <div className="text">
                                <h1>Create Content in Single Click with AI Power</h1>
                                <p>Give our AI a few descriptions and we’ll automatically create blog articles, product descriptions, and more within seconds.</p>
                                <ul>
                                    <li>Let's communicate with your customers with emotions</li>
                                    <li>Start creating powerful content for your next ads</li>
                                    <li>Settling in the country</li>
                                </ul>
                                <button className="cta-button">Get Started</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='seperate-sec'>
                    <div className='second-part-section2'>
                        <div className="content">

                            <div className="text">
                                <h1>Instruct to our AI and generate copy</h1>
                                <p>
                                    Give our AI a few descriptions and we’ll automatically create blog articles, product descriptions, and more for you within just few seconds.
                                </p>
                                <ul>
                                    <li>Entering & Leaving From Country</li>
                                    <li>Country Citizenship</li>
                                    <li>Settling In Country</li>
                                </ul>
                                <button className="cta-button">Get Started</button>
                            </div>
                        </div>
                        <div className="image-container">
                            <img src={loc} alt="World and binoculars illustration" className="image-placeholder loc" />
                        </div>
                    </div>
                </section>
            </section>

            <section className='card-section'>
                <div>
                    <div
                        className={`services-div ${isHovered ? 'hovered' : ''}`}
                        onMouseEnter={() => setIsHovered(true)}
                    >
                        <b><p>Our Services</p></b>
                    </div>
                    <Cards />

                </div>
            </section>
            <section className='third-section'>
                {/* <Sliders /> */}
            </section>

            {/* New Review Section */}
            <section className='review-section'>
                <ReviewSlider />
            </section>
            <PaidCards/>
            <Footer />
        </div>
    );
}
