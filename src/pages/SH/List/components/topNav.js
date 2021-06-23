import React, { Component } from "react";
import "./topNav.scss";

class TopNav extends Component {
  render() {
    return (
      <>
        <nav className="wrap">
          <p className="title">SooBucks</p>
          <p className="list">COFFEE MENU STORE WHTAT'S NEW</p>
        </nav>
      </>
    );
  }
}
export default TopNav;
