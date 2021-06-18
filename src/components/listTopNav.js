/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const TopNav = () => {
  return (
    <header className="top-nav-bar">
      <a href="#" className="logotop">
        Webucks
      </a>
      <div className="nav">
        <nav>
          <a href="#" className="navlist">
            COFFEE
          </a>
          <a href="#" className="navlist">
            MENU
          </a>
          <a href="#" className="navlist">
            STORE
          </a>
          <a href="#" className="navlist">
            WHAT'S NEW
          </a>
        </nav>
      </div>
    </header>
  );
};

export default TopNav;
