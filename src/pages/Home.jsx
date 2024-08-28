// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import '../assets/css/Home.css'; // Import custom CSS
import ProductList from '../components/ProductList'; // Import the new component
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <h1>Welcome to Our Online Store</h1>
          <p>
            Discover the best deals and top-quality products tailored to your
            needs. Start exploring now and find what you are looking for!
          </p>

          <Link
            to={`/product`}
            className="cta-button"
          >
            Shop Now
          </Link>
        </div>
      </header>
      <main className="home-main">
        <section className="home-features">
          <h2>Why Shop With Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <img
                src="https://via.placeholder.com/100"
                alt="Exclusive Offers"
                className="feature-icon"
              />
              <h3>Exclusive Offers</h3>
              <p>
                Enjoy exclusive discounts and promotions available only to our
                valued customers.
              </p>
            </div>
            <div className="feature">
              <img
                src="https://via.placeholder.com/100"
                alt="Quality Products"
                className="feature-icon"
              />
              <h3>Quality Products</h3>
              <p>
                We offer a wide range of high-quality products to ensure you get
                the best value.
              </p>
            </div>
            <div className="feature">
              <img
                src="https://via.placeholder.com/100"
                alt="Fast Shipping"
                className="feature-icon"
              />
              <h3>Fast Shipping</h3>
              <p>
                Get your orders delivered quickly and efficiently with our
                reliable shipping services.
              </p>
            </div>
          </div>
        </section>
        <ProductList limit={4} /> {/* Limit the ProductList to 5 items */}
        <div className="view-all-products">
          <Link
            to="/product"
            className="view-all-button"
          >
            View All Products
          </Link>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
