import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BlogList from "./Components/BlogList";
import "./App.css";

function App() {
  const [sample, setSample] = useState([
    {
      id: 1,
      title: "Random title",
      body: "lorem ipsum....",
    },
    {
      id: 2,
      title: "Second Random title",
      body: "lorem ipsum....",
    },
    {
      id: 3,
      title: "Third Random title",
      body: "lorem ipsum....",
    },
  ]);

  return (
    <Router>
      <div className="App">
        <h1>React Blog</h1>
        <Navbar />
      </div>
      <Switch>
        <Route>
          <BlogList sample={sample} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
