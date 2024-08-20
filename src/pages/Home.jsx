// src/pages/Home.jsx
import React from 'react';
import '../assets/css/Home.css'; // Import custom CSS

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Website</h1>
        <p>
          Your journey starts here. Explore our offerings and get to know us
          better.
        </p>
      </header>
      <main className="home-main">
        <section className="home-intro">
          <h2>About Us</h2>
          <p>
            We are dedicated to delivering top-notch services tailored to your
            needs. Our team of experts is here to help you achieve your goals
            with efficiency and excellence.
          </p>
        </section>
        <section className="home-features">
          <div className="feature">
            <h3>Feature One</h3>
            <p>
              Discover the amazing features that we offer to enhance your
              experience.
            </p>
          </div>
          <div className="feature">
            <h3>Feature Two</h3>
            <p>
              Our platform is designed with user-friendliness and functionality
              in mind.
            </p>
          </div>
          <div className="feature">
            <h3>Feature Three</h3>
            <p>
              We continuously improve our services based on your feedback and
              needs.
            </p>
          </div>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
