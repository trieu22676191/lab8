import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import video1 from "../img/video1.png";
import video2 from "../img/video2.png";
import video3 from "../img/video3.png";
import video4 from "../img/video4.png";

const RecipeCard = ({ image, title, time, link }) => {
  return (
    <div
      className="recipe-item bg-white h-100"
      style={{
        borderRadius: "12px",
        border: "1px solid #eee",
      }}
    >
      <div className="position-relative">
        <img
          src={image}
          alt={title}
          className="w-100"
          style={{
            height: "200px",
            objectFit: "cover",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        />
      </div>
      <div className="p-3 position-relative">
        <h3
          style={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#2B2B2B",
            marginBottom: "8px",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: "1.3",
          }}
        >
          {title}
        </h3>
        <div className="d-flex justify-content-between align-items-center">
          <span
            style={{
              fontSize: "14px",
              color: "#FF4E8C",
              fontWeight: "400",
            }}
          >
            {time} minutes
          </span>
          <button
            className="border-0 bg-transparent"
            style={{
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <i
              className="far fa-bookmark"
              style={{ color: "#FF4E8C", fontSize: "16px" }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const VideoRecipes = () => {
  const recipes = [
    {
      image: video1,
      title: "Salad with cabbage and shrimp",
      time: "52",
      link: "/recipe/cabbage-shrimp",
    },
    {
      image: video2,
      title: "Salad of cove beans, shrimp and potatoes",
      time: "20",
      link: "/recipe/beans-shrimp",
    },
    {
      image: video3,
      title: "Sunny-side up fried eggs",
      time: "15",
      link: "/recipe/fried-eggs",
    },
    {
      image: video4,
      title: "Lotus delight salad",
      time: "20",
      link: "/recipe/lotus",
    },
  ];

  return (
    <div
      className="video-recipes"
      style={{
        backgroundColor: "#fff",
        padding: "60px 0",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <h2
            className="mb-2"
            style={{
              fontSize: "32px",
              fontWeight: "600",
              color: "#FF4E8C",
            }}
          >
            Recipes With Videos
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#666",
              maxWidth: "450px",
              margin: "0 auto",
            }}
          >
            Cooking Up Culinary Creations with Step-by-Step Videos
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="row g-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <Link to={recipe.link} className="text-decoration-none">
                <RecipeCard {...recipe} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoRecipes;
