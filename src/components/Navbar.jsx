// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../assets/css/Navbar.css'; // Import the custom CSS

const Navbar = () => {
  return (
    <AppBar
      position="static"
      className="navbar"
    >
      <Toolbar className="navbar-toolbar">
        <Typography
          variant="h6"
          className="navbar-title"
          component={Link}
          to="/"
        >
          Online Store
        </Typography>
        <div className="navbar-links">
          <Button
            color="inherit"
            component={Link}
            to="/product"
            className="navbar-button"
          >
            Product
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            className="navbar-button"
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            className="navbar-button"
          >
            Contact
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/email"
            className="navbar-button"
          >
            Email
          </Button>
        </div>
        <Button
          color="inherit"
          className="navbar-logout"
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
