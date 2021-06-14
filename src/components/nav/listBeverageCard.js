import React, { Component } from "react";
import { BiHeart } from "react-icons/bi";

class Beverage extends Component {
  render() {
    return (
      <div className="grid">
        <a href="main.html" className="coffeeImg">
          <img src={this.props.img} alt="beverageImg" className="listImage" />
        </a>
        <p>
          {this.props.name} <BiHeart />
        </p>
      </div>
    );
  }
}

export default Beverage;
