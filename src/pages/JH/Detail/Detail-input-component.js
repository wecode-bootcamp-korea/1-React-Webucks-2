import React, { Component } from "react";
import ReviewContent from "./Detail-review-component";

class InputReview extends Component {
  constructor() {
    super();
    this.state = {
      ReviewData: [],
    };
  }

  pushReviewComment = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addReviewComment = event => {
    event.preventDefault();
    const inputIDs = event.target.inputIDValue.value;
    const inputReviews = event.target.inputReviewValue.value;
    if (!inputIDs) {
      alert("아이디가 없네요? 입력해주세요 ✨");
    } else if (!inputReviews) {
      alert("리뷰가 없네요? 입력해주세요 ✨");
    } else if (inputIDs && inputReviews) {
      this.setState({
        ReviewData: [
          ...this.state.ReviewData,
          {
            inputID: inputIDs,
            inputReview: inputReviews,
          },
        ],
      });
      event.target.reset();
    } else {
      return;
    }
  };

  deleteComments = () => {
    const { ReviewData } = this.state;
    const deletingComm = this.state.comment;
    this.setState({
      ReviewData: ReviewData.filter(comm => comm.id !== deletingComm),
    });
  };

  render() {
    const { ReviewData } = this.state;
    return (
      <>
        <div className="reviewText">
          <ReviewContent ID="coffee_lover" review="너무 맛있어요!" />
          <ReviewContent
            ID="CHOCO7"
            review="오늘도 카페 모카를 마시러 갑니다. 최애 커피에요!"
          />
          {ReviewData.map((comment, index) => (
            <ReviewContent
              key={index}
              ID={comment.inputID}
              review={comment.inputReview}
              deleteComments={this.deleteComments}
            />
          ))}
        </div>
        <div className="reviewContainer">
          <form className="reviewForm" onSubmit={this.addReviewComment}>
            <label htmlFor="reviewText" className="labelForReview">
              아이디
            </label>
            <input
              type="text"
              className="inputReview"
              id="reviewText"
              name="inputIDValue"
              placeholder="아이디를 입력해주세요."
              onChange={this.pushReviewComment}
              value={this.state.inputID}
            />
            <label htmlFor="reviewText" className="labelForReview">
              리뷰
            </label>
            <input
              type="text"
              className="inputReview"
              id="reviewText"
              name="inputReviewValue"
              placeholder="리뷰를 입력해주세요."
              onChange={this.pushReviewComment}
              value={this.state.inputReview}
            />
            <button className="submitBtn" type="submit">
              제출
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default InputReview;
