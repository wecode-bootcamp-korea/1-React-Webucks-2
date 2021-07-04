/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./ListSH.scss";
import TopNav from "./components/topNav";
import MidNav from "./components/midNav";
import BottomNav from "./components/bottomNav";
import BeverageCard from "./components/beverageCard";
import BeverageCardData from "../../../mockData/listMockData";

class ListSH extends Component {
  render() {
    return (
      <div className="container">
        <TopNav className="topBanner" />
        <MidNav />
        <div className="cardWrap">
          <div className="coffeeList">
            {BeverageCardData.map(beverage => (
              <BeverageCard
                key={beverage.id} // 이렇게 부모컨포넌트에서 목데이터를 맵함수를 이용하고
                img={beverage.img} // 프랍스를 통해 자식에게 넘겨준다
                name={beverage.name}
              />
            ))}
          </div>
        </div>
        <input type="text" placeholder="이름" />
        <BottomNav />
      </div>
    );
  }
}
export default ListSH;
