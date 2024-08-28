// src/components/ProductList.jsx
import '../assets/css/ProductList.css'; // Import the CSS for this component

const products = [
  {
    id: 1,
    name: 'Product One',
    description: 'A brief description of Product One.',
    price: '$99.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product Two',
    description: 'A brief description of Product Two.',
    price: '$149.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product Three',
    description: 'A brief description of Product Three.',
    price: '$199.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Product four',
    description: 'A brief description of Product four.',
    price: '$199.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Product five',
    description: 'A brief description of Product five.',
    price: '$199.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const ProductList = () => {
  return (
    <section className="product-list">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="product-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
