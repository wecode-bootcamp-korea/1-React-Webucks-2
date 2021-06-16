import React, { Component } from "react";

class NutritionMS extends Component {
  render() {
    return (
      <>
        <p class="coffedescription">
          달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어
          휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가 부드럽게
          어우러진 커피
        </p>
        <div className="nutritionInfo">
          <p className="nutritionInfoTitle1">제품 영양 정보</p>
          <p className="nutritionInfoTitle2">Tall(톨)/355ml(12 fl oz)</p>
        </div>
        <div className="nutritionDetailBox">
          <div className="nutritionDetailLeft">
            <ul>
              <li>1회제공량(Kcal)</li>
              <li>포화지방(g)</li>
              <li>단백질(g)</li>
            </ul>
            <ul classname="nutritionleftNum">
              <li>345</li>
              <li>11</li>
              <li>11</li>
            </ul>
            <ul>
              <li>나트륨(mg)</li>
              <li>당류(g)</li>
              <li>카페인(mg)</li>
            </ul>
            <ul>
              <li>150</li>
              <li>35</li>
              <li>75</li>
            </ul>
          </div>
        </div>
        <p className="allergy">알레르기 유발 요인 : 우유</p>
      </>
    );
  }
}
export default NutritionMS;
