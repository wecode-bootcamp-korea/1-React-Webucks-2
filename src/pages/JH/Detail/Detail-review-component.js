import React, { Component } from "react";

class ReviewContent extends Component {
  constructor() {
    super();
    this.state = {
      isClickLike: false,
    };
  }

  handleLikeBtns = () => {
    this.setState({
      isClickLike: !this.state.isClickLike,
    });
  };

  render() {
    const { ID, review, deleteComments } = this.props;
    const { isClickLike } = this.state;
    return (
      <p className="textContainer">
        <span className="text">{ID}</span>
        <span className="reviewtext">{review}</span>
        {isClickLike ? (
          <button className="likeBtn" onClick={this.handleLikeBtns}>
            {"👍"}
          </button>
        ) : (
          <button className="likeBtn" onClick={this.handleLikeBtns}>
            {"☑️"}
          </button>
        )}
        <button className="deleteIcon" onClick={deleteComments}>
          {"❌"}
        </button>
      </p>
    );
  }
}

export default ReviewContent;
