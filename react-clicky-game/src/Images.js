import React from "react";
import App from "./App";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately

const Images = props => (
  <div>
    {console.log(props.images)}
    {props.images.map(image => {
      return (
        <div key={image.id}>
          <img src={image.image} onClick={this.props.handleIncrement} />
        </div>
      );
    })}
  </div>
);

export default Images;
