import React, { Component } from "react";
import "../Login/LoginJH.scss";

class LoginJH extends Component {
  constructor() {
    super();
    this.state = {
      inputIDValue: "",
      inputPWValue: "",
    };
  }

  handleInput = event => {
    console.log(event.target.value);
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  switchPage = () => {
    this.props.history.push("/ListJH");
  };

  render() {
    const { inputIDValue, inputPWValue } = this.state;
    return (
      <div className="Login">
        <div className="allContainer">
          <div className="bucksContainer">
            <h1 className="title">ZuckerBucks</h1>
            <div className="inputContainer">
              <form action="/ListJH" id="loginForm">
                <input
                  type="text"
                  id="inputIDValue"
                  className={
                    inputIDValue.includes("@")
                      ? "bucksLogin active"
                      : "bucksLogin"
                  }
                  name="inputIDValue"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  required
                  onChange={this.handleInput}
                />
                <input
                  type="password"
                  id="inputPWValue"
                  className={
                    inputPWValue.length >= 8
                      ? "bucksLogin active"
                      : "bucksLogin"
                  }
                  name="inputPWValue"
                  placeholder="비밀번호"
                  required
                  onChange={this.handleInput}
                />
                <button
                  className={
                    inputIDValue.includes("@") && inputPWValue.length >= 8
                      ? "bucksBtn active"
                      : "bucksBtn"
                  }
                  onClick={this.switchPage}
                >
                  로그인
                </button>
              </form>
            </div>
            <div className="forgetPassword">
              <a href="/" className="bucksLink">
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginJH;
