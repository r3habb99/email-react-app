import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products'; // Import the products array
import '../assets/css/ProductDetail.css'; // Import custom CSS

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchedProduct = products.find((p) => p.id === parseInt(productId));
    setProduct(fetchedProduct);
  }, [productId]);

  if (!product) {
    return <p className="not-found">Product not found</p>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-image-container">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-detail-image"
        />
      </div>
      <div className="product-detail-info">
        <h2 className="product-detail-name">{product.name}</h2>
        <p className="product-detail-description">{product.description}</p>
        <p className="product-detail-price">{product.price}</p>
        <button className="product-detail-button">Add to Cart</button>
        <div className="product-detail-extras">
          <div className="product-detail-section">
            <h3>Available Sizes</h3>
            <p>{product.sizes.join(', ')}</p>
          </div>
          <div className="product-detail-section">
            <h3>Available Colors</h3>
            <p>{product.colors.join(', ')}</p>
          </div>
          <div className="product-detail-section">
            <h3>Material</h3>
            <p>{product.material}</p>
          </div>
          <div className="product-detail-section">
            <h3>Care Instructions</h3>
            <p>{product.careInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
