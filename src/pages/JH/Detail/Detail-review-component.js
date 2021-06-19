import React, { Component } from "react";

class ReviewContent extends Component {
  render() {
    const { ID, review, deleteComments } = this.props;
    return (
      <p className="textContainer">
        <span className="text">{ID}</span>
        <span className="reviewtext">{review}</span>
        <button className="deleteIcon" onClick={deleteComments}>
          {"❌"}
        </button>
      </p>
    );
  }
}

export default ReviewContent;
