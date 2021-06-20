import React, { Component } from "react";

class DetailFooterLinks extends Component {
  render() {
    const { goTo_links } = this.props;
    return <a href="/">{goTo_links}</a>;
  }
}

export default DetailFooterLinks;
