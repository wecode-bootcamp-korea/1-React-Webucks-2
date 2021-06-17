import React, { Component } from "react";
import ReviewContent from "./Detail-reveiw-component";

class InputReview extends Component {
  constructor() {
    super();
    this.state = {
      inputReviewValue: "",
      inputIDValue: "",
      ReviewData: [],
    };
  }

  pushReviewComment = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addReviewComment = () => {
    const { ReviewData, inputIDValue, inputReviewValue } = this.state;
    if (!inputIDValue) {
      alert("아이디가 없네요? 입력해주세요");
    }
    if (!inputReviewValue) {
      alert("리뷰가 없네요? 입력해주세요");
    }
    if (inputIDValue && inputReviewValue) {
      this.setState({
        ReviewData: [
          ...ReviewData,
          {
            inputID: inputIDValue,
            inputReview: inputReviewValue,
          },
        ],
      });
    } else {
      return;
    }
  };

  addCommentEnter = event => {
    if (event.key === "Enter") {
      this.addReviewComment();
      event.target.value = "";
    }
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
          {ReviewData.map(comment => (
            <ReviewContent ID={comment.inputID} review={comment.inputReview} />
          ))}
        </div>
        <div className="reviewContainer">
          <form className="reviewForm">
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
              onKeyPress={this.addCommentEnter}
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
              onKeyPress={this.addCommentEnter}
            />
          </form>
        </div>
      </>
    );
  }
}

export default InputReview;
