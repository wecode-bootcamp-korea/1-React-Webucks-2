import React, { Component } from "react";

class ReviewContent extends Component {
  render() {
    return (
      <p className="textContainer">
        <span className="text">{this.props.ID}</span>
        <span>{this.props.review}</span>
      </p>
    );
  }
}

export default ReviewContent;
