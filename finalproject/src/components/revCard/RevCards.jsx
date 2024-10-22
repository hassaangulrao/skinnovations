import React from 'react';
import './RevCards.css';
import rev1 from '../revCard/rev1.jpg'; // Assuming the correct path to your image

export default function RevCards() {
  const reviews = [
    {
      id: 1,
      stars: 5,
      quote: "They not only understand what I say but read between the lines and also give me ideas of my own.",
      name: "Kristin Watson",
      title: "Medical Assistant",
      image: rev1 // Path to the image you're using for this review
    },
    {
      id: 2,
      stars: 5,
      quote: "They not only understand what I say but read between the lines and also give me ideas of my own.",
      name: "John Doe",
      title: "Software Engineer",
      image: rev1
    },
    {
      id: 3,
      stars: 4,
      quote: "They not only understand what I say but read between the lines and also give me ideas of my own.",
      name: "Sarah Smith",
      title: "Designer",
      image: rev1
    },
    {
      id: 4,
      stars: 4,
      quote: "They not only understand what I say but read between the lines and also give me ideas of my own.",
      name: "Sarah Smith",
      title: "Designer",
      image: rev1
    },
    {
      id: 5,
      stars: 4,
      quote: "They not only understand what I say but read between the lines and also give me ideas of my own.",
      name: "Sarah Smith",
      title: "Designer",
      image: rev1
    },
    {
      id: 6,
      stars: 4,
      quote: "They not only understand what I say but read between the lines and also give me ideas of my own.",
      name: "Sarah Smith",
      title: "Designer",
      image: rev1
    },
    // Add more reviews as needed
  ];

  return (
    <div className="carousel-container">
      <div className="carousel">
        {reviews.map((review) => (
          <div key={review.id} className="card-rev">
            <div className="quote-section">
              <div className="stars">
                {Array(review.stars).fill().map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
              </div>
              {/* Adding HR after stars */}
              <hr className="divider" />
              <p className="quote">{`"${review.quote}"`}</p>
            </div>
            <div className="profile-section">
              <img src={review.image} alt="Profile" className="profile-image" />
              
              <div className="profile-info">
              
                <p className="name">{review.name}</p>
                <p className="title">{review.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
