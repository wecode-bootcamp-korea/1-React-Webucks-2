import React, { Component } from "react";
import { BiHeart } from "react-icons/bi";

class Beverage extends Component {
  render() {
    return (
      <div className="grid">
        <a href="list.html" className="coffeeImg">
          <img src={this.props.img} alt="beverageImg" className="listImage" />
        </a>
        <p>
          {this.props.name} <BiHeart />
        </p>
      </div>
    );
  }
}

Beverage.defaultProps = {
  name: "default",
  img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000190]_20210419131723532.jpg",
};

export default Beverage;
