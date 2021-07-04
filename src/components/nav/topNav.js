import React, { Component } from "react";

class topNav extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="contents">
            <p>Shintarbucks</p>
            <p>COFFEE MENU STORE WHAT'S NEW WHAT'S NEW</p>
          </div>
        </nav>
        <nav>
          <div className="contents2">
            <p>콜드 브루 커피</p>
            <p>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</p>
          </div>
        </nav>
      </>
    );
  }
}
export default topNav;
