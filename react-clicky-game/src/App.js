import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
