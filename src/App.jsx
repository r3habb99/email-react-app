// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Ensure this path is correct
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
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard>
              <Home />
            </Dashboard>
          }
        />
        <Route
          path="/about"
          element={
            <Dashboard>
              <About />
            </Dashboard>
          }
        />
        <Route
          path="/contact"
          element={
            <Dashboard>
              <Contact />
            </Dashboard>
          }
        />
        <Route
          path="/product"
          element={
            <Dashboard>
              <ProductList />
            </Dashboard>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <Dashboard>
              <ProductDetail />
            </Dashboard>
          }
        />
        <Route
          path="/email"
          element={
            <Dashboard>
              <Email />
            </Dashboard>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
