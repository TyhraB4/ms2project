import './App.css';
import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import SearchBar from './components/FindRecipe';
import AddRecipe from './components/Recipe Container/AddRecipe';
import RecipeCard from './components/Recipe Container/RecipeCard';
import Nav from "react-bootstrap/Nav";


function App() {
  return (
    <div className="App">
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="my-app\src\components\Home.js">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="my-app\src\components\About.js">
            About Us
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2my-app\src\components\Recipe Container\AddRecipe.js">
            Add a Recipe
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="my-app\src\components\FindRecipe.js">
            Find a Recipe
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default App;
