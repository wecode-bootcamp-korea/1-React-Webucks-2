import React, { Component } from "react";
import { FiHeart } from "react-icons/fi";

class Beverage extends Component {
  render() {
    const { name, img } = this.props;
    return (
      <div className="grid">
        <a href="/" className="coffeeImg">
          <img src={img} alt="beverageImg" className="listImage" />
        </a>
        <p>
          {name} <FiHeart />
        </p>
      </div>
    );
  }
}

export default Beverage;
