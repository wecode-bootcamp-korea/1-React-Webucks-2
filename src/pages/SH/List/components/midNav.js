import React, { Component } from "react";
import "./midNav.scss";
import { SiCoffeescript } from "react-icons/si";

class MidNav extends Component {
  render() {
    return (
      <nav className="midNav">
        <p className="title">콜드 브루 커피</p>
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
export default MidNav;
