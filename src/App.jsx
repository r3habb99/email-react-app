// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Email from './pages/Email';
import ProductList from './components/ProductList';
import ProductDetail from './pages/ProductDetail';
import './App.css';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/product"
            element={<ProductList />}
          />
          <Route
            path="/product/:productId"
            element={<ProductDetail />}
          />
          <Route
            path="/email"
            element={<Email />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
