import React, { Component } from "react";

class TopNavMS extends Component {
  render() {
    return (
      <>
        <nav className="navBox">
          <p className="navTitle">Webucks</p>
          <ul className="navList">
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </nav>
      </>
    );
  }
}
export default TopNavMS;
