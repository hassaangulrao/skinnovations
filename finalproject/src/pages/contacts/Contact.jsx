import React, { useEffect, useState } from 'react';
import './Contact.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Map from '../../components/map/Map';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='main-div'>
            <div>
                <Header />
            </div>

            <div>
                <div className={`Contact-Content  text-white ${isVisible ? 'visible' : ''}`}>
                    <p>Get In Touch</p>
                    <h1>Let's Talk For Your <br /><span className='next-project'>Next Project</span></h1>
                    
                    <p>Let’s Connect to Discuss Your Next Projects Together! Reach Out to Us Through the Form.</p>
                </div>
                <div className="elementor-widget-container my-4 mx-5 ">
                    <div className="mf-form-wrapper my-5">
                        <form className="metform-form-content" action="https://pxbeam.com/wp-json/metform/v1/entries/insert/5482" method="POST">
                            {/* Response Message */}
                            <div className="mf-main-response-wrap mf-response-msg-wrap" data-show="0">
                                <div className="mf-response-msg">
                                    <i className="mf-success-icon fas fa-check"></i>
                                    <p></p>
                                </div>
                            </div>

                            {/* Input Fields */}
                            {[
                                { label: "Full Name", type: "text", placeholder: "Richard D. Hammond", name: "mf-text", id: "mf-input-text" },
                                { label: "Email Address", type: "email", placeholder: "support@gmail.com", name: "mf-email", id: "mf-input-email" },
                                { label: "Phone Number", type: "tel", placeholder: "+880 (123) 456 88", name: "mf-telephone", id: "mf-input-telephone" },
                                { label: "Subject", type: "text", placeholder: "e.g Web Development, Web Design", name: "subject", id: "mf-input-subject" },
                            ].map((input, index) => (
                                <div key={index} className="mf-input-wrapper">
                                    <label className="mf-input-label" htmlFor={input.id}>
                                        {input.label} <span className="mf-input-required-indicator">*</span>
                                    </label>
                                    <input type={input.type} className="mf-input" id={input.id} name={input.name} placeholder={input.placeholder} required />
                                </div>
                            ))}

                            {/* Textarea */}
                            <div className="mf-input-wrapper">
                                <label className="mf-input-label" htmlFor="mf-input-message">
                                    Message <span className="mf-input-required-indicator">*</span>
                                </label>
                                <textarea className="mf-input mf-textarea" id="mf-input-message" name="Message" placeholder="Write your message" cols="30" rows="10" required></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="mf-btn-wraper">
                                <button type="submit" className="metform-btn metform-submit-btn">
                                    <span>Send Us Message</span>
                                    <i aria-hidden="true" className="fas fa-angle-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <Map />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}
