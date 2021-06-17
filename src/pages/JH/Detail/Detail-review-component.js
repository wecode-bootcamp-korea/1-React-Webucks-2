import React, { Component } from "react";

class ReviewContent extends Component {
  render() {
    const { ID, review } = this.props;
    return (
      <p className="textContainer">
        <span className="text">{ID}</span>
        <span className="reviewtext">{review}</span>
      </p>
    );
  }
}

export default ReviewContent;
