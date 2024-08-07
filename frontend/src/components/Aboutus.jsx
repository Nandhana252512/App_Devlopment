// src/AboutUs.js
import React, { useState } from 'react';
import aboutImage from '../assets/images/about-image.jpg';

const AboutUs = () => {
  const [expandedReview, setExpandedReview] = useState(null);

  const toggleReview = (index) => {
    setExpandedReview(expandedReview === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.textBox}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.paragraph}>
          Welcome to ShopSee! We are a premier online destination for all your clothing rental needs.
        </p>
        <p style={styles.paragraph}>
          Our mission is to provide high-quality, stylish, and affordable clothing options for every occasion.
          Whether you're looking for a stunning outfit for a special event or just need something new to wear for the week, we've got you covered.
        </p>
        <p style={styles.paragraph}>
          Our team is dedicated to ensuring that you have the best shopping experience possible. We pride ourselves on our excellent customer service and our extensive selection of clothing items.
        </p>
        <p style={styles.paragraph}>
          Thank you for choosing ShopSee. We hope you enjoy your shopping experience with us!
        </p>
      </div>
      <div style={styles.imageBox}>
        <img src={aboutImage} alt="About Us" style={styles.image} />
      </div>

      <div style={styles.feedbackSection}>
        <h2 style={styles.feedbackHeading}>Customer Feedback</h2>
        
        <div style={styles.feedbackList}>
          {feedbackData.map((feedback, index) => (
            <div 
              key={index} 
              style={styles.feedbackBox} 
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = styles.feedbackBoxHover.boxShadow} 
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = styles.feedbackBox.boxShadow}
            >
              <div style={styles.feedbackHeader}>
                <img src={feedback.image} alt={feedback.name} style={styles.feedbackAvatar} />
                <div style={styles.feedbackDetails}>
                  <p style={styles.feedbackName}>{feedback.name}</p>
                  <div style={styles.feedbackStars}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={i < feedback.rating ? styles.starFilled : styles.star}>⭐</span>
                    ))}
                  </div>
                  <p style={styles.feedbackDate}>{feedback.date}</p>
                </div>
              </div>
              <div style={styles.feedbackContent}>
                <p
                  style={styles.feedbackText}
                  onClick={() => toggleReview(index)}
                >
                  {expandedReview === index ? feedback.text : `${feedback.text.substring(0, 100)}...`}
                </p>
                {expandedReview === index && <p style={styles.feedbackFullText}>{feedback.text}</p>}
                {feedback.sentiment && <span style={{ ...styles.feedbackSentiment, backgroundColor: sentimentColors[feedback.sentiment] }}>{feedback.sentiment}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const feedbackData = [
  {
    name: 'Sarah J.',
    image: 'https://media.istockphoto.com/id/1399363164/photo/young-happy-african-american-businesswoman-working-on-a-digital-tablet-alone-in-an-office-one.jpg?s=1024x1024&w=is&k=20&c=ZF92cpIqg8SDEL1nR4LpCdCKHNYbxT9BHpgrCMY_SDI=',
    rating: 5,
    date: 'July 20, 2024',
    text: 'ShopSee has been my go-to for every event. The quality and selection are top-notch, and the customer service is amazing! I would definitely recommend it to all my friends and family.',
    sentiment: 'Positive'
  },
  {
    name: 'Michael B.',
    image: 'https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=1024x1024&w=is&k=20&c=tlTA4SvOrjz9psmv6-0RtA8sC9pmkZdm0KkxK6o8qJo=',
    rating: 4,
    date: 'July 18, 2024',
    text: 'I love the convenience and affordability of renting clothes. ShopSee makes it easy to look stylish without breaking the bank. The process is smooth, but sometimes the sizes can be inconsistent.',
    sentiment: 'Mixed'
  },
  {
    name: 'Emily K.',
    image: 'https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.jpg?s=1024x1024&w=is&k=20&c=W35ywsjgemV4txriyvml2ytWzz01Wmaa1gCGYujkHYw=',
    rating: 5,
    date: 'July 15, 2024',
    text: 'Great experience every time! The clothes always arrive in perfect condition, and the process is so seamless. I always find something new to wear, and the customer support is top-notch.',
    sentiment: 'Positive'
  },
];

const sentimentColors = {
  Positive: '#d4edda',
  Mixed: '#fff3cd',
  Negative: '#f8d7da',
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
    gap: '20px',
    flexWrap: 'wrap',
  },
  textBox: {
    flex: '1',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#ffffff',
    maxWidth: '500px',
  },
  heading: {
    fontSize: '2.5em',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    marginBottom: '15px',
    textAlign: 'left',
  },
  imageBox: {
    flex: '1',
    maxWidth: '600px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  feedbackSection: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  feedbackHeading: {
    fontSize: '2em',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  feedbackList: {
    marginTop: '10px',
  },
  feedbackBox: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    marginBottom: '15px',
    transition: 'box-shadow 0.3s ease-in-out',
  },
  feedbackBoxHover: {
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
  feedbackHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  feedbackAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '15px',
  },
  feedbackDetails: {
    flex: '1',
  },
  feedbackName: {
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  feedbackStars: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
  },
  feedbackDate: {
    fontSize: '0.9em',
    color: '#888',
  },
  feedbackContent: {
    marginTop: '10px',
  },
  feedbackText: {
    fontSize: '1.1em',
    lineHeight: '1.5',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out',
  },
  feedbackTextHover: {
    color: '#00796b',
  },
  feedbackFullText: {
    fontSize: '1.1em',
    lineHeight: '1.5',
    marginTop: '10px',
  },
  feedbackSentiment: {
    display: 'inline-block',
    padding: '5px 10px',
    borderRadius: '4px',
    color: '#00796b',
    fontSize: '0.9em',
    marginTop: '10px',
  },
};

export default AboutUs;
