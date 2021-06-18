import React, { Component } from "react";
import "./DetailMS.scss";
import BigTitleMS from "./component/BigTitleMS";
import BottomNavMS from "./component/BottomNavMS";
import CoffeeImageMS from "./component/CoffeeImageMS";
import NutritionMS from "./component/NutritionMS";
import ReviewMS from "./component/ReviewMS";
import SmallTitleMS from "./component/SmallTitleMS";
import TopNavMS from "./component/TopNavMS";

class DetailMS extends Component {
  render() {
    return (
      <>
        <div class="wholeWrapper">
          <TopNavMS />
          <BigTitleMS />
          <section class="descriptionCard">
            <CoffeeImageMS />
            <div class="detailCard">
              <SmallTitleMS />
              <NutritionMS />
              <ReviewMS />
            </div>
          </section>
        </div>
        <BottomNavMS />
      </>
    );
  }
}
export default DetailMS;
