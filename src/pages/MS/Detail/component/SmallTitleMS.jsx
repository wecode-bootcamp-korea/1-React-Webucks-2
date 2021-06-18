import React, { Component } from "react";
import { AiOutlineHeart } from "react-icons/ai";

class SmallTitleMS extends Component {
  constructor() {
    super();
    this.state = {
      iconActive: false,
    };
  }

  handleToggleHeart = e => {
    this.setState({ iconActive: !this.state.iconActive });
    console.log(this.state.iconActive);
  };

  render() {
    return (
      <span className="smallTitleWrapper">
        <div className="smallTitleBox">
          <p className="smallTitle">화이트 초콜릿 모카</p>
          <p className="smallTitleEng">White Chocolate Mocha</p>
        </div>
        <AiOutlineHeart
          onClick={this.handleToggleHeart}
          className={
            this.state.iconActive ? "heartIcon iconActive" : "heartIcon"
          }
        />
      </span>
    );
  }
}
export default SmallTitleMS;
