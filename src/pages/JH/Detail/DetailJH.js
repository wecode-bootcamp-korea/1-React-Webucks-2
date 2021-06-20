import React, { Component } from "react";
import DetailNav from "../Detail/Detail-nav-component";
import DetailFooter from "../Detail/Detail-footer-component";
import DataList from "../Detail/Detail-data-component";
import ClickHeartIcon from "../Detail/Detail-hearticon-component";
import InputReview from "./Detail-input-component.js";
import "../Detail/DetailJH.scss";
import { FOOTER_DATA } from "../../../MockData";

class DetailJH extends Component {
  render() {
    return (
      <div className="Detail">
        <div className="allContainer">
          <DetailNav />
          <section>
            <div className="main">
              <div className="subtitle">
                <h2 className="subtitleText">콜드 브루</h2>
                <div className="titleList">
                  <a href="/">홈 {">"}</a>
                  <a href="/">menu {">"}</a>
                  <a href="/">음료 {">"}</a>
                  <a href="/">에스프레소 {">"}</a>
                  <a href="/">카페 모카</a>
                </div>
              </div>
            </div>
            <div className="products">
              <div className="imageContainer">
                <img
                  src="/images/Mocha.jpeg"
                  alt="카페 모카"
                  className="mocha"
                />
              </div>
              <div className="productAllContent">
                <div className="productInfor">
                  <div className="productName">
                    <h4>카페 모카</h4>
                    <span>Café Mocha</span>
                  </div>
                  <div className="explain">
                    <p>
                      진한 초콜릿 모카 시럽과 풍부한 에스프레소
                      <br />
                      신선한 우유 및 얼음과 섞어 휘핑크림으로 마무리한 조화로운
                      맛의 음료
                      <br />
                    </p>
                  </div>
                  <ClickHeartIcon />
                </div>
                <div className="productNutrition">
                  <div className="nutriName">
                    <p className="nutriExplain">제품 영양 정보</p>
                    <div className="infoText">Tall(톨) / 355ml (12 fl oz)</div>
                  </div>
                </div>
                <div className="productInfoContent">
                  <div className="dataContainer1">
                    <ul>
                      <DataList text="1회 제공량 (kcal)" data="280" />
                      <DataList text="포화지방 (g)" data="6" />
                      <DataList text="단백질 (g)" data="5" />
                    </ul>
                  </div>
                  <div className="dataContainer">
                    <ul>
                      <DataList text="나트륨 (mg)" data="180" />
                      <DataList text="당류 (g)" data="36" />
                      <DataList text="카페인 (mg)" data="90" />
                    </ul>
                  </div>
                </div>
                <div className="allergy">
                  <p>알레르기 유발 요인: 우유</p>
                </div>
                <div className="review">
                  <p>리뷰</p>
                </div>
                <InputReview />
              </div>
            </div>
          </section>
          <footer className="footer">
            <div className="footerMenu">
              {FOOTER_DATA.map(items => (
                <DetailFooter
                  key={items.id}
                  section={items.section}
                  goTo={items.goTo}
                />
              ))}
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default DetailJH;
