import React, { Component } from "react";
import { AiOutlineHeart } from "react-icons/ai";

class SmallTitleMS extends Component {
  render() {
    return (
      <span class="smallTitleWrapper">
        <div class="smallTitleBox">
          <p class="smallTitle">화이트 초콜릿 모카</p>
          <p class="smallTitleEng">White Chocolate Mocha</p>
        </div>
        <AiOutlineHeart class="heartIcon" />
      </span>
    );
  }
}
export default SmallTitleMS;
