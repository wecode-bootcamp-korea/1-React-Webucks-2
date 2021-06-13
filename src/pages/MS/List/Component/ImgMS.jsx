import React, { Component } from "react";

class ImgMS extends Component {
  render() {
    return (
      <>
        <section className="ColdbrewList">
          <div className="Coldbrewimages">
            <img
              src="./Images/Starbucks_Coffee_PR_IcedCaffeLatte"
              alt="나이트로 바닐라크림"
              className="coldBrewImage"
            />
          </div>
          <div class="ColdbrewDescriptions">
            <p className="coldbrewImageTitle">나이트로 바닐라 크림❤</p>
          </div>
        </section>
      </>
    );
  }
}
export default ImgMS;
