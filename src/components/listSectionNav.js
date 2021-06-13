import React from "react";
import { GiCoffeeCup } from "react-icons/gi";

const SectionBar = () => {
  return (
    <div>
      <GiCoffeeCup />
      <span className="coldbrew">콜드 브루 커피</span>
      <span className="info">
        디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
      </span>
    </div>
  );
};

export default SectionBar;
