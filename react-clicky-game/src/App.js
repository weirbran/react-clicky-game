import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Images from "./Images";
import Score from "./Score";

const images = [
  {
    id: 1,
    image: "./public/assets/images/alcatraz.png"
  },

  {
    id: 2,
    images: "./public/assets/images/Alhambra.png"
  },

  {
    id: 3,
    image: "./public/assets/images/Burj-Khalifa.gif"
  },

  {
    id: 4,
    image: "./public/assets/images/Chichen-Itza.png"
  },

  {
    id: 5,
    image: "./public/assets/images/Eiffel-Tower.png"
  },

  {
    id: 6,
    image: "./public/assets/images/golden-gate-bridge.jpg"
  },

  {
    id: 7,
    image: "./public/assets/images/Great-Wall.jpg"
  },

  {
    id: 8,
    image: "./public/assets/images/Lincoln-memorial.png"
  },

  {
    id: 9,
    image: "./public/assets/images/pyramids-giza.jpg"
  },

  {
    id: 10,
    image: "./public/assets/images/Savior-On-Blood.png"
  },

  {
    id: 11,
    image: "./public/assets/images/St-Peters-Basilica.png"
  },

  {
    id: 12,
    image: "./public/assets/images/Sydney-Opera-House.png"
  }
];

class App extends Component {
  state = {
    images,
    score: 0
  };

  //Pseudocode
  //function that logs each of user's guesses, then compares it to what they've selected before
  //if the user's last guess matches the log, then score is set to 0
  //if the answer is unique, then this.setState.score + 1

  //Pseudocode
  //function that shuffles the items of the array after each guess

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Score />
        <Images onClick={this.handleIncrement} images={this.state.images} />
      </div>
    );
  }
}

export default App;
