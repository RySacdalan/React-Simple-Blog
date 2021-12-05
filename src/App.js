import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Create from "./Components/Create";
import Homepage from "./Homepage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route exact path="/">
            <Homepage />
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
