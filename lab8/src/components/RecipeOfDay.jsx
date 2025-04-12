import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Selection from "../img/Selection.png";
import Ava from "../img/ava.png";

const RecipeOfDay = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Selection})`,
          backgroundSize: "contain",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f8f9fa",
        }}
      />

      <div className="container h-100 position-relative">
        {/* Recipe Card */}
        <div
          className="recipe-card bg-white rounded-4 p-4"
          style={{
            width: "360px",
            position: "absolute",
            top: "50%",
            left: "50px",
            transform: "translateY(-50%)",
            boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
            zIndex: 1,
          }}
        >
          {/* Recipe Tag */}
          <div className="mb-4">
            <span
              className="px-3 py-2 rounded-pill"
              style={{
                backgroundColor: "#FFB800",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Recipe of the day
            </span>
          </div>

          {/* Recipe Title */}
          <h2
            className="mb-3"
            style={{
              color: "#FF4E8C",
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "12px",
            }}
          >
            Salad Caprese
          </h2>

          {/* Recipe Description */}
          <p
            className="mb-4"
            style={{
              fontSize: "14px",
              color: "#666",
              lineHeight: "1.6",
              marginBottom: "24px",
            }}
          >
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
            herbs, olive oil, and balsamic vinegar create a refreshing dish for
            lunch or appetizer.
          </p>

          {/* Author Section */}
          <div className="d-flex flex-column align-items-center mb-4">
            <img
              src={Ava}
              alt="Author"
              className="rounded-circle mb-2"
              style={{ width: "48px", height: "48px", objectFit: "cover" }}
            />
            <span
              style={{
                color: "#666",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Salad Caprese
            </span>
          </div>

          {/* View Button */}
          <Link
            to="/recipe/salad-caprese"
            className="btn w-100 text-white d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#FF4E8C",
              borderRadius: "25px",
              fontSize: "14px",
              padding: "12px",
              fontWeight: "500",
            }}
          >
            View now
            <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeOfDay;
