import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/ProductList.css';
import { useEffect, useState } from 'react';

const ProductList = ({ initialPage = 1, limit = 10 }) => {
  // Set limit to 3
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `http://localhost:3000/product-data/products?page=${page}&limit=${limit}`
      )
      .then((res) => {
        setProducts(res.data.results);
        setTotalPages(res.data.totalPages);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [page, limit]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
                <p className="product-price">₹ {product.price}/-</p>
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

      <div className="pagination">
        <button
          className="pagination-button"
          disabled={page <= 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`pagination-number ${
              page === index + 1 ? 'active' : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="pagination-button"
          disabled={page >= totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ProductList;
