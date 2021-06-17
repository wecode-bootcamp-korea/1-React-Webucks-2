import React, { Component } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import "../List/ListJH.scss";

class Beverage extends Component {
  constructor() {
    super();
    this.state = {
      isClickHeart: false,
    };
  }

  handleHeartIcon = () => {
    this.setState({
      isClickHeart: !this.state.isClickHeart,
    });
  };

  render() {
    const { name, img } = this.props;
    const { isClickHeart } = this.state;
    return (
      <div className="grid">
        <a href="/" className="coffeeImg">
          <img src={img} alt="beverageImg" className="listImage" />
        </a>
        <p>
          {name}{" "}
          {isClickHeart ? (
            <FaHeart className="clickOnIcon" onClick={this.handleHeartIcon} />
          ) : (
            <FiHeart onClick={this.handleHeartIcon} />
          )}
        </p>
      </div>
    );
  }
}

export default Beverage;
