import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Movies from "./Sets/movies";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Movies />
      </div>
    );
  }
}
