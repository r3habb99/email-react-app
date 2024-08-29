// src/components/ProductList.jsx
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { products } from '../data/products'; // Import the products array
import '../assets/css/ProductList.css'; // Import the CSS for this component
import { useEffect, useState } from 'react';

const ProductList = ({ limit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from API when the component mounts
    axios
      .get('http://localhost:3000/product-data/products')
      .then((res) => {
        const allProducts = res.data;
        // If limit is set, limit the array of products, otherwise display all products
        const limitedProducts = limit
          ? allProducts.slice(0, limit)
          : allProducts;
        setProducts(limitedProducts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [limit]);

  return (
    <section className="product-list">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div
            key={`${product._id}-${index}`}
            className="product-card"
          >
            <Link
              to={`/product/${product._id}`}
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
              to={`/product/${product._id}`}
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
