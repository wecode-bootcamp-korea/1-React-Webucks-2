import React, { Component } from "react";
import { GiCoffeeCup } from "react-icons/gi";

class SectionNav extends Component {
  render() {
    return (
      <div className="sectionNav">
        <span className="sectionName"> {this.props.name} </span>
        <div className="coffeeIcon">
          <GiCoffeeCup />
        </div>
        <span className="info">
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </span>
      </div>
    );
  }
}

export default SectionNav;