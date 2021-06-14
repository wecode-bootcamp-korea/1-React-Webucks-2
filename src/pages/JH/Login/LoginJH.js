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

  handleIDInput = event => {
    this.setState({ inputIDValue: event.target.value });
  };

  handlePWInput = event => {
    this.setState({ inputPWValue: event.target.value });
  };

  render() {
    return (
      <div className="Login">
        <div className="allContainer">
          <div className="bucksContainer">
            <h1 className="title">ZuckerBucks</h1>
            <div className="inputContainer">
              <form action="main.html" id="loginForm">
                <input
                  type="text"
                  id="inputIDValue"
                  className="bucksLogin"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  required
                  onChange={this.handleIDInput}
                />
                <input
                  type="password"
                  id="inputPWValue"
                  className="bucksLogin"
                  placeholder="비밀번호"
                  required
                  onChange={this.handlePWInput}
                />
                <button
                  class="bucksBtn"
                  onClick={() => {
                    this.props.history.push("/ListJH");
                  }}
                >
                  로그인
                </button>
              </form>
            </div>
            <div className="forgetPassword">
              <a href="main.html" className="bucksLink">
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
