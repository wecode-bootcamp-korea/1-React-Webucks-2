import React, { Component } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import "../Detail/DetailJH.scss";

class ClickHeartIcon extends Component {
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
    return (
      <div className="heartIcon">
        {this.state.isClickHeart ? (
          <FaHeart className="clickOnIcon" onClick={this.handleHeartIcon} />
        ) : (
          <FiHeart onClick={this.handleHeartIcon} />
        )}
      </div>
    );
  }
}

export default ClickHeartIcon;
