/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./beverageCard.scss";

class BeverageCard extends Component {
  render() {
    console.log("부모가 준 값", this.props);
    return (
      <>
        <div className="box">
          <img className="beverage" src={this.props.abc} />
          <p>{this.props.abcd}</p>
        </div>
      </>
    );
  }
}
export default BeverageCard;
