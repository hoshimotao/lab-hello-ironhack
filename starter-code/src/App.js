import React, { Component } from "react";
import Images from "./Images";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="bigDivBody">
        <div className="App">
          <h1> Say hello to ReactJS! </h1>
          <p>
            You will learn Frontend framework from scratch, to become a Ninja
            Developer.
          </p>
          <h3 className="awesome"> Awesome </h3>
        </div>
        <Images />
      </div>
    );
  }
}

export default App;
