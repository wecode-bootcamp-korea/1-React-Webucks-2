import React from "react";

class productList extends React.Component {
	constructor() {
		super();
		this.state = {
			products = [],
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/data/myData.json', {
			method: 'GET'
		})
			.then(res => res.json())
      .then(data => {
        this.setState({
          products: data.myData,     
        });
      });
	}

	render() {
		<div className="kurly-page">
		  <div className="title-wrap">
		    <p className="title">늘 기분 좋은 가격</p>
		    <p className="sub-title">가격부터 늘 기분 좋은 컬리 장바구니 필수템</p>
		  </div>
		  <div className="card-wrap">
		    {this.state.products.map((product, index) => {
		      return (
		        <Card key={index} img={product.img} name={product.name} price={product.price} />
		      );
		    })}
		  </div>
		</div>
	}
}

export default productList