/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./ListSH.scss";
import TopNav from "./components/topNav";
import MidNav from "./components/midNav";
import BottomNav from "./components/bottomNav";
import BeverageCard from "./components/beverageCard";

const DATA = [
  {
    name: "바닐라라떼",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg",
  },
  {
    name: "아메리카노",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg",
  },
  {
    name: "라떼",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg",
  },
  {
    name: "카페모카",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg",
  },
];

class ListSH extends Component {
  render() {
    return (
      <>
        <TopNav />
        <MidNav />
        <BottomNav />
        {DATA.map(element => {
          return <BeverageCard abc={element.img} abcd={element.name} />;
        })}
        <input type="text" placeholder="이름" />
      </>
    );
  }
}
export default ListSH;
