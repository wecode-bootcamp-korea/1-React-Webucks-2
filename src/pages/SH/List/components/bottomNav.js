import React, { Component } from "react";
import "./bottomNav.scss";
import { SiCoffeescript } from "react-icons/si";

class bottomNav extends Component {
  render() {
    return (
      <nav className="bottomNav">
        <p className="title">브루드 커피</p>
        <p className="imoticon">
          <SiCoffeescript />
        </p>
        <p className="notice">
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </p>
      </nav>
    );
  }
}
export default bottomNav;
