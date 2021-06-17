import React, { Component } from "react";
import ListNav from "../List/List-nav-component";
import Beverage from "./List-beverage-component";
import BEVERAGE_DATA, { BEVERAGE_DATA2 } from "../../../MockData";
import { FaCoffee } from "react-icons/fa";
import "../List/ListJH.scss";

class ListJH extends Component {
  render() {
    return (
      <div className="List">
        <div className="allContainer">
          <ListNav />
          <div className="banner">
            <span className="coldbrew">콜드 브루 커피</span>
            <FaCoffee />
            <span className="noticeText">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </div>
          <div className="coffeeList">
            {BEVERAGE_DATA.map(beverage => (
              <Beverage
                key={beverage.id}
                img={beverage.img}
                name={beverage.name}
              />
            ))}
          </div>
          <div className="banner">
            <span className="coldbrew">브루드 커피</span>
            <FaCoffee />
            <span className="noticeText">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </div>
          <div className="coffeeList">
            {BEVERAGE_DATA2.map(beverage => (
              <Beverage
                key={beverage.id}
                img={beverage.img}
                name={beverage.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ListJH;
