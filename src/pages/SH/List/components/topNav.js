import React, { Component } from "react";
import "./topNav.scss";

class TopNav extends Component {
  render() {
    return (
      <nav className="topNavWrap">
        <p className="title">SooBucks</p>
        <ul className="navList">
          <li className="navItem"> COFFEE </li>
          <li className="navItem"> MENU </li>
          <li className="navItem"> STORE </li>
          <li className="navItem"> WHTAT'SNEW </li>
        </ul>
      </nav>
    );
  }
}
export default TopNav;
