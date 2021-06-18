import React, { Component } from "react";
import TopNav from "../../../components/listTopNav.js";
import SectionNav from "../../../components/listSectionNav.js";
import Beverage from "../../../components/listBeverageCard.js";
import "./ListMJ.scss";

class ListMJ extends Component {
  render() {
    return (
      <div className="wrap-everyting">
        <TopNav />
        <SectionNav name="콜드 브루 커피" />
        <article className="coffeeList">
          <Beverage
            img="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000190]_20210419131723532.jpg"
            name="자몽 허니 블랙티"
          />
          <Beverage
            img="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003431]_20210401092933664.jpg"
            name="포레스트 콜드 브루"
          />
          <Beverage
            img="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
            name="나이트로 바닐라 크림"
          />
          <Beverage
            img="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
            name="나이트로 콜드 브루"
          />
          <Beverage
            img="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg"
            name="바닐라 크림 콜드 브루"
          />
          <Beverage
            img="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
            name="돌체 콜드 브루"
          />
          <Beverage
            img="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"
            name="콜드 브루"
          />
          <Beverage
            img="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
            name="콜드 브루 몰트"
          />
          <Beverage
            img="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg"
            name="콜드 브루 오트 라떼"
          />
        </article>
        <SectionNav name="브루드 커피" />
        <article className="coffeeList">
          <Beverage
            img="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg"
            name="아이스커피"
          />
          <Beverage
            img="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg"
            name="오늘의 커피"
          />
        </article>
      </div>
    );
  }
}

export default ListMJ;
