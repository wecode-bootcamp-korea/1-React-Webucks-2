import React, { Component } from "react";

class DetailNav extends Component {
  render() {
    return (
      <header className="headerContainer">
        <div className="header">
          <h1 className="logo">
            <a href="/">ZuckerBucks</a>
          </h1>
          <nav className="headerNav">
            <ul>
              <li>
                <a href="/" className="navElement">
                  coffee
                </a>
                <a href="/" className="navElement">
                  menu
                </a>
                <a href="/" className="navElement">
                  store
                </a>
                <a href="/" className="navElement">
                  what's new
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default DetailNav;
