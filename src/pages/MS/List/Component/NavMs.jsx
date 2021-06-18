import React, { Component } from "react";
import { BiCoffee } from "react-icons/bi";

class NavMS extends Component {
  render() {
    return (
      <div className="coldbrewBox">
        <div className="coldbrewDescription">
          <span className="coldbrewTitle">{this.props.TitleText}</span>
          <BiCoffee class="coldbrewIcon" />
          <p className="ColdbrewText">{this.props.DescriptionText}</p>
        </div>
      </div>
    );
  }
}
export default NavMS;
