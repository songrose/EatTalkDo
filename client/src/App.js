import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Deck
} from "./components";
import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/deck" component={Deck} />
        </div>
      </Router>
    );
  }
}

export default App;
