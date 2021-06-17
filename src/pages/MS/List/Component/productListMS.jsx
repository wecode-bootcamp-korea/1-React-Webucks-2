/* eslint-disable array-callback-return */
import React from "react";

class productListMS extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/myData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          products: data.myData,
        });
      });
  }

  render() {
    return (
      <div className="kurly-page">
        <div className="title-wrap">
          <p className="title">늘 기분 좋은 가격</p>
          <p className="sub-title">
            가격부터 늘 기분 좋은 컬리 장바구니 필수템
          </p>
        </div>
        <div className="card-wrap">
          {this.state.products.map((product, index) => {
            // eslint-disable-next-line react/jsx-no-undef
            <Card
              key={index}
              img={product.img}
              name={product.name}
              price={product.price}
            />;
          })}
        </div>
      </div>
    );
  }
}

export default productListMS;
