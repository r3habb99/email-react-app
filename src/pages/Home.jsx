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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfDlmyTfxkY4HnWkeKjlrqrF9__60V9CgXQ&s"
                alt="Exclusive Offers"
                className="feature-icon"
              />
              <h3>Exclusive Offers</h3>
              <p>
                Enjoy exclusive discounts and promotions available only to our
                valued customers. We regularly update our offers to include
                seasonal sales, special bundles, and limited-time discounts,
                ensuring that you get the best deals on your favorite products.
              </p>
            </div>
            <div className="feature">
              <img
                src="https://img.freepik.com/free-vector/award-ribbon-check-mark-with-stars_78370-1097.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724198400&semt=ais_hybrid"
                alt="Quality Products"
                className="feature-icon"
              />
              <h3>Quality Products</h3>
              <p>
                We offer a wide range of high-quality products to ensure you get
                the best value. Each item is carefully selected and tested to
                meet our rigorous standards for quality, durability, and
                performance.
              </p>
            </div>
            <div className="feature">
              <img
                src="https://img.freepik.com/premium-vector/fast-delivery-truck-icon-set-fast-shipping-design-website-mobile-apps-online-shopping_97458-1031.jpg"
                alt="Fast Shipping"
                className="feature-icon"
              />
              <h3>Fast Shipping</h3>
              <p>
                Get your orders delivered quickly and efficiently with our
                reliable shipping services. We partner with leading carriers to
                offer expedited shipping options that ensure your products
                arrive on time.
              </p>
            </div>
          </div>
        </section>
        <ProductList limit={5} /> {/* Limit the ProductList to 5 items */}
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
