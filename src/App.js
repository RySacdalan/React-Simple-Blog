import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BlogList from "./Components/BlogList";
import Create from "./Components/Create";
import Homepage from "./Homepage";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Blogs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route exact path="/">
            <Homepage blogs={blogs} />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
