import React, { Component } from "react";

class DetailNav extends Component {
  render() {
    return (
      <header className="headerContainer">
        <div className="header">
          <h1 className="logo">
            <a href="main.html">ZuckerBucks</a>
          </h1>
          <nav className="headerNav">
            <ul>
              <a href="main.html" className="navElement">
                coffee
              </a>
              <a href="main.html" className="navElement">
                menu
              </a>
              <a href="main.html" className="navElement">
                store
              </a>
              <a href="main.html" className="navElement">
                what's new
              </a>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default DetailNav;
