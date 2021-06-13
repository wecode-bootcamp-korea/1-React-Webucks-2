import React, { Component } from "react";
import "./ListMS.scss";
import ImgMS from "./Component/ImgMS";
import NavMS from "./Component/NavMs";
import TopNav from "./Component/TopNavMS";

class ListMS extends Component {
  render() {
    return (
      <>
        <ImgMS />
        <NavMS
          titleText="콜드 부르 커피"
          DescriptionText="디카페인 에스프레소 샷 추가 기능"
        />
        <TopNav />
      </>
    );
  }
}
export default ListMS;
