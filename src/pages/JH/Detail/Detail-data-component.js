import React, { Component } from "react";

class DataList extends Component {
  render() {
    return (
      <li>
        <dl className="dataList">
          <dt>{this.props.text}</dt>
          <dd>{this.props.data}</dd>
        </dl>
      </li>
    );
  }
}

export default DataList;
