import React, { Component } from "react";
import DetailFooterLinks from "../Detail/Detail-footer-links-component";
import "../Detail/Detail-footer-links-component";

class DetailFooter extends Component {
  render() {
    const { section, goTo } = this.props;
    return (
      <div className="footList">
        <h5 className="listHeader">{section}</h5>
        {goTo.map(links => (
          <DetailFooterLinks key={links.id} {...links} />
        ))}
      </div>
    );
  }
}

export default DetailFooter;
