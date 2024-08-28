// src/components/ProductList.jsx
import { Link } from 'react-router-dom';
import { products } from '../data/products'; // Import the products array
import '../assets/css/ProductList.css'; // Import the CSS for this component

const ProductList = ({ limit }) => {
  const displayedProducts = products.slice(0, limit);

  return (
    <section className="product-list">
      <h2>Our Products</h2>
      <div className="product-grid">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
          >
            <Link
              to={`/product/${product.id}`}
              className="product-card-link"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
              <div className="product-card-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </Link>
            <Link
              to={`/product/${product.id}`}
              className="product-button"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
