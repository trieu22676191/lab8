import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import editor1 from "../img/editor1.png";
import editor2 from "../img/editor2.png";
import editor3 from "../img/editor3.png";
import editor4 from "../img/editor4.png";
import ava1 from "../img/ava1.png";
import ava2 from "../img/ava2.png";
import ava3 from "../img/ava3.png";
import ava4 from "../img/ava4.png";

const RecipeCard = ({
  image,
  title,
  time,
  author,
  authorImage,
  description,
}) => {
  return (
    <div
      className="recipe-item bg-white h-100"
      style={{
        borderRadius: "16px",
        border: "1px solid #eee",
        overflow: "hidden",
      }}
    >
      <div className="row g-0">
        <div className="col-5">
          <img
            src={image}
            alt={title}
            className="w-100 h-100"
            style={{
              minHeight: "240px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-7">
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#2B2B2B",
                    marginBottom: "8px",
                  }}
                >
                  {title}
                </h3>
                <div
                  style={{
                    fontSize: "15px",
                    color: "#FF4E8C",
                    marginBottom: "16px",
                  }}
                >
                  {time} minutes
                </div>
              </div>
              <button
                className="border-0 bg-transparent"
                style={{
                  width: "36px",
                  height: "36px",
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
                  style={{ color: "#FF4E8C", fontSize: "18px" }}
                ></i>
              </button>
            </div>

            <div className="d-flex align-items-center mb-3">
              <img
                src={authorImage}
                alt={author}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "16px",
                  objectFit: "cover",
                }}
              />
              <span
                style={{
                  fontSize: "18px",
                  color: "#2B2B2B",
                  fontWeight: "500",
                }}
              >
                {author}
              </span>
            </div>
            <p
              style={{
                fontSize: "15px",
                color: "#666",
                margin: 0,
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                lineHeight: "1.5",
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditorsPick = () => {
  const recipes = [
    {
      image: editor1,
      title: "Stuffed sticky rice ball",
      time: "34",
      author: "Jennifer King",
      authorImage: ava1,
      description:
        "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
      link: "/recipe/sticky-rice-ball",
    },
    {
      image: editor2,
      title: "Strawberry smoothie",
      time: "40",
      author: "Matthew Martinez",
      authorImage: ava2,
      description:
        "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
      link: "/recipe/strawberry-smoothie",
    },
    {
      image: editor3,
      title: "Latte Art",
      time: "19",
      author: "Sarah Hill",
      authorImage: ava3,
      description:
        "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
      link: "/recipe/latte-art",
    },
    {
      image: editor4,
      title: "Butter fried noodles",
      time: "16",
      author: "Julia Lopez",
      authorImage: ava4,
      description:
        "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
      link: "/recipe/butter-noodles",
    },
  ];

  return (
    <div
      className="editors-pick"
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
            Editor's pick
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#666",
              maxWidth: "450px",
              margin: "0 auto",
            }}
          >
            Curated Culinary Delights: Handpicked Favorites by Our Expert
            Editors!
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="row g-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="col-md-6">
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

export default EditorsPick;
