import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ marginTop: "80px" }}></main>
      </div>
    </Router>
  );
}

export default App;
