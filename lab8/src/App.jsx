import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import RecipeOfDay from "./components/RecipeOfDay";
import SummerRecipes from "./components/SummerRecipes";
import VideoRecipes from "./components/VideoRecipes";
import EditorsPick from "./components/EditorsPick";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <RecipeOfDay />
        <div style={{ marginTop: "-100px", position: "relative", zIndex: 1 }}>
          <SummerRecipes />
          <VideoRecipes />
          <EditorsPick />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
