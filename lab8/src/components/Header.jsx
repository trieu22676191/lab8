import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import logo from "../img/logo_header.png";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Chefify Logo" height="32" className="me-2" />
        </Navbar.Brand>

        {/* Search Bar */}
        <div className="search-container mx-auto" style={{ width: "400px" }}>
          <div className="position-relative">
            <i
              className="fas fa-search position-absolute"
              style={{
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#666",
              }}
            ></i>
            <input
              type="text"
              placeholder="What would you like to cook?"
              className="form-control bg-light border-0 ps-5"
              style={{
                borderRadius: "24px",
                fontSize: "14px",
                padding: "12px 20px",
                width: "100%",
                backgroundColor: "#e8e9eb",
              }}
            />
          </div>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Menu */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/what-to-cook" className="text-secondary">
              What to cook
            </Nav.Link>
            <Nav.Link as={Link} to="/recipes" className="text-secondary">
              Recipes
            </Nav.Link>
            <Nav.Link as={Link} to="/ingredients" className="text-secondary">
              Ingredients
            </Nav.Link>
            <Nav.Link as={Link} to="/occasions" className="text-secondary">
              Occasions
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="text-secondary">
              About Us
            </Nav.Link>
          </Nav>

          {/* Auth Buttons */}
          <div className="d-flex align-items-center">
            <Link
              to="/login"
              className="text-decoration-none px-4 py-2 rounded-pill"
              style={{
                color: "#FF4E8C",
                backgroundColor: "#FFE6EE",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#FFD4E3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#FFE6EE")}
            >
              Login
            </Link>
            <Link
              to="/subscribe"
              className="ms-2 px-4 py-2 rounded-pill text-decoration-none text-white"
              style={{
                backgroundColor: "#FF4E8C",
                border: "none",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#ff3377")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#FF4E8C")}
            >
              Subscribe
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
