import React, { Component } from "react";

export default class Images extends Component {
  render() {
    return (
      <div className="flexBoxing">
        <div className="moreFlex">
        <img src="./images/icon1.png" />
        <h4> Declarative </h4>
        <p> React makes it painless to create interactive UIs</p>
        </div>

        <div className="moreFlex">
        <img src="./images/icon2.png" />
        <h4> Components </h4>
        <p> Build encapsulated components that manage their state </p>
        </div>

        <div className="moreFlex">
        <img src="./images/icon3.png" />
        <h4> Single-Way </h4>
        <p> A set of immutable values are passed to the components.</p>
        </div>

        <div className="moreFlex">
        <img src="./images/icon4.png" />
        <h4> JSX </h4>
        <p> Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    );
  }
}
