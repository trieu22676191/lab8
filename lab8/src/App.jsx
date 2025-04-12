import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import RecipeOfDay from "./components/RecipeOfDay";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ marginTop: "80px" }}>
          <RecipeOfDay />
        </main>
      </div>
    </Router>
  );
}

export default App;
