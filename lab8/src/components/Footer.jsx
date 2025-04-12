import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo_footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1E2833",
        padding: "64px 0 32px",
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        boxSizing: "border-box",
        minWidth: "100%",
        overflowX: "hidden",
      }}
    >
      <div className="container">
        <div className="row gy-5">
          {/* About Us Column */}
          <div className="col-lg-6">
            <div className="mb-5">
              <h5
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "24px",
                }}
              >
                About Us
              </h5>
              <p
                style={{
                  fontSize: "15px",
                  color: "#B4B4B4",
                  marginBottom: "24px",
                  lineHeight: "1.6",
                }}
              >
                Welcome to our website, a wonderful place to explore and learn
                how to cook like a pro.
              </p>
              <div className="d-flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "10px 16px",
                    fontSize: "14px",
                    flex: "1",
                  }}
                />
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#FF4E8C",
                    color: "#fff",
                    padding: "10px 24px",
                    borderRadius: "6px",
                    border: "none",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Send
                </button>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <img src={logo} alt="Chefify Logo" height="32" />
                <span
                  style={{ color: "#fff", fontSize: "20px", fontWeight: "500" }}
                ></span>
              </div>
              <div
                className="d-flex align-items-center gap-4"
                style={{ color: "#B4B4B4", fontSize: "14px" }}
              >
                <span>2025 Chefify Company</span>
                <Link
                  to="/terms"
                  style={{ color: "#B4B4B4", textDecoration: "none" }}
                >
                  Terms of Service
                </Link>
                <Link
                  to="/privacy"
                  style={{ color: "#B4B4B4", textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Learn More & Shop Column */}
          <div className="col-lg-3">
            <div className="mb-5">
              <h5
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "24px",
                }}
              >
                Learn More
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <Link
                    to="/our-cooks"
                    style={{
                      color: "#B4B4B4",
                      textDecoration: "none",
                      fontSize: "15px",
                    }}
                  >
                    Our Cooks
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/features"
                    style={{
                      color: "#B4B4B4",
                      textDecoration: "none",
                      fontSize: "15px",
                    }}
                  >
                    See Our Features
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/faq"
                    style={{
                      color: "#B4B4B4",
                      textDecoration: "none",
                      fontSize: "15px",
                    }}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "24px",
                }}
              >
                Shop
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <Link
                    to="/gift-subscription"
                    style={{
                      color: "#B4B4B4",
                      textDecoration: "none",
                      fontSize: "15px",
                    }}
                  >
                    Gift Subscription
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/feedback"
                    style={{
                      color: "#B4B4B4",
                      textDecoration: "none",
                      fontSize: "15px",
                    }}
                  >
                    Send Us Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Recipes Column */}
          <div className="col-lg-3">
            <h5
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              Recipes
            </h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-3">
                <Link
                  to="/what-to-cook"
                  style={{
                    color: "#B4B4B4",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  What to Cook This Week
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/pasta"
                  style={{
                    color: "#B4B4B4",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Pasta
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/dinner"
                  style={{
                    color: "#B4B4B4",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Dinner
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/healthy"
                  style={{
                    color: "#B4B4B4",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Healthy
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/vegetarian"
                  style={{
                    color: "#B4B4B4",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Vegetarian
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/vegan"
                  style={{
                    color: "#B4B4B4",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Vegan
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/christmas"
                  style={{
                    color: "#B4B4B4",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Christmas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
