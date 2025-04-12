import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <div
          style={{
            fontSize: "12px",
            color: "#666",
            marginBottom: "4px",
          }}
        ></div>
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

const SummerRecipes = () => {
  const recipes = [
    {
      image: "/src/img/summer1.png",
      title: "Italian-style tomato salad",
      time: "14",
      link: "/recipe/italian-style",
    },
    {
      image: "/src/img/summer2.png",
      title: "Spaghetti with vegetables and shrimp",
      time: "15",
      link: "/recipe/spaghetti",
    },
    {
      image: "/src/img/summer3.png",
      title: "Lotus delight salad",
      time: "20",
      link: "/recipe/lotus",
    },
    {
      image: "/src/img/summer4.png",
      title: "Snack cakes",
      time: "21",
      link: "/recipe/snack",
    },
  ];

  return (
    <div
      className="summer-recipes"
      style={{
        backgroundColor: "#fff",
        padding: "40px 0",
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
            This Summer Recipes
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#666",
              maxWidth: "450px",
              margin: "0 auto",
            }}
          >
            We have all your Independence Day sweets covered.
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

export default SummerRecipes;
