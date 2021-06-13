import React, { Component } from "react";

class NavMS extends Component {
  render() {
    return (
      <>
        <div className="coldbrewBox">
          <p className="coldbrewTitle">{this.props.titllText}</p>
          <div className="coldbrewDescription">
            <img
              src="./images/coffee-cup.png"
              alt="커피컵"
              className="coffeeCupImage"
            />
            <p className="coldbrewOption">{this.props.DescriptionText}</p>
          </div>
        </div>
      </>
    );
  }
}
export default NavMS;
