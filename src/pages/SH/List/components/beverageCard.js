/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./beverageCard.scss";

class BeverageCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="beverageCardWrapper">
        <img className="beverage" src={this.props.img} />
        {this.props.name}
      </div>
    );
  }
}
export default BeverageCard;
