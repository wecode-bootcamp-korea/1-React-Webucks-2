import React, { Component } from "react";
import { BiHeart } from "react-icons/bi";

class BeverageMS extends Component {
  render() {
    return (
      <>
        <span>
          <img src={this.props.image} alt="beverageImg" class="coldBrewImage" />
          <p class="coldbrewImageTitle">
            {this.props.name} <BiHeart />
          </p>
        </span>
      </>
    );
  }
}

export default BeverageMS;
