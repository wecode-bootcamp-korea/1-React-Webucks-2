import React, { Component } from "react";
import "./ListMS.scss";
import BeverageMS from "./Component/BeverageMS";
import NavMS from "./Component/NavMs";
import TopNavMS from "./Component/TopNavMS";

class ListMS extends Component {
  render() {
    return (
      <>
        <TopNavMS />
        <NavMS
          TitleText="콜드부르 커피"
          DescriptionText="디카페인 에스프레소 샷 추가 가능(일부음료 제외)"
        />
        <section class="coldbreImageList1">
          <BeverageMS
            image="https://www.tasteofhome.com/wp-content/uploads/2019/05/Starbucks_Coffee_PR_IcedCaffeLatte-1.jpg?w=1200"
            name="콜드부르 라떼"
          />
          <BeverageMS
            image="https://www.tasteofhome.com/wp-content/uploads/2019/05/Starbucks_Coffee_PR_IcedCaffeLatte-1.jpg?w=1200"
            name="콜드부르 라떼"
          />
          <BeverageMS
            image="https://www.tasteofhome.com/wp-content/uploads/2019/05/Starbucks_Coffee_PR_IcedCaffeLatte-1.jpg?w=1200"
            name="콜드부르 라떼"
          />
          <BeverageMS
            image="https://www.tasteofhome.com/wp-content/uploads/2019/05/Starbucks_Coffee_PR_IcedCaffeLatte-1.jpg?w=1200"
            name="콜드부르 라떼"
          />
        </section>
        <section class="coldbreImageList2">
          <BeverageMS
            image="https://www.tasteofhome.com/wp-content/uploads/2019/05/Starbucks_Coffee_PR_IcedCaffeLatte-1.jpg?w=1200"
            name="콜드부르 라떼"
          />
          <BeverageMS
            image="https://www.tasteofhome.com/wp-content/uploads/2019/05/Starbucks_Coffee_PR_IcedCaffeLatte-1.jpg?w=1200"
            name="콜드부르 라떼"
          />
          <BeverageMS
            image="https://www.tasteofhome.com/wp-content/uploads/2019/05/Starbucks_Coffee_PR_IcedCaffeLatte-1.jpg?w=1200"
            name="콜드부르 라떼"
          />
          <BeverageMS
            image="https://www.tasteofhome.com/wp-content/uploads/2019/05/Starbucks_Coffee_PR_IcedCaffeLatte-1.jpg?w=1200"
            name="콜드부르 라떼"
          />
        </section>
        <section class="coldbreImageList3">
          <BeverageMS
            image="https://www.tasteofhome.com/wp-content/uploads/2019/05/Starbucks_Coffee_PR_IcedCaffeLatte-1.jpg?w=1200"
            name="콜드부르 라떼"
          />
          <BeverageMS
            image="https://www.tasteofhome.com/wp-content/uploads/2019/05/Starbucks_Coffee_PR_IcedCaffeLatte-1.jpg?w=1200"
            name="콜드부르 라떼"
          />
        </section>
        <NavMS
          TitleText="부르드 커피"
          DescriptionText="디카페인 에스프레소 샷 추가 가능(일부음료 제외)"
        />
        <section class="coldbreImageList4">
          <BeverageMS
            image="https://www.tasteofhome.com/wp-content/uploads/2019/05/Starbucks_Coffee_PR_IcedCaffeLatte-1.jpg?w=1200"
            name="콜드부르 라떼"
          />
          <BeverageMS
            image="https://www.tasteofhome.com/wp-content/uploads/2019/05/Starbucks_Coffee_PR_IcedCaffeLatte-1.jpg?w=1200"
            name="콜드부르 라떼"
          />
        </section>
      </>
    );
  }
}
export default ListMS;
