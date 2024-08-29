// src/pages/Dashboard.jsx
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/css/Dashboard.css'; // Optional: Add any specific styling for the Dashboard component

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <main className="dashboard-main">{children}</main>
      <Footer />
    </div>
  );
};

export default Dashboard;
