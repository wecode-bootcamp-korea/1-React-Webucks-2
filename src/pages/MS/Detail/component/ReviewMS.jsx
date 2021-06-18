import React, { Component } from "react";

class ReviewMS extends Component {
  render() {
    return (
      <>
        <p className="reviewTitle">리뷰</p>
        <div className="reviewWrapper">
          <div className="review1">
            <p className="reviewId1">coffee_lover</p>
            <p className="reviewComment1">너무 맛있어요!</p>
          </div>
          <div className="review2">
            <p className="reviewId2">Choco_7</p>
            <p className="reviewComment2">존맛탱 존맛탱굴이!</p>
          </div>
          <div className="review3">
            <p className="reviewId3">Doomnag</p>
            <p className="reviewComment3">여기라떼는 전설이다!</p>
          </div>
        </div>
        <input
          className="reviewInput"
          type="text"
          placeholder="리뷰를 입력해주세요"
        />
      </>
    );
  }
}
export default ReviewMS;
