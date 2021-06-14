import React, { Component } from "react";
import "../Login/LoginJH.scss";

class LoginJH extends Component {
  constructor() {
    super();
    this.state = {
      inputIDValue: "",
      inputPWValue: "",
      inputIDBorder: "bucksLogin",
      inputPWBorder: "bucksLogin",
      isButtonActive: false,
    };
  }

  handleIDInput = event => {
    this.setState({ inputIDValue: event.target.value }, () => {
      this.state.inputIDValue.includes("@")
        ? this.setState({ inputIDBorder: "bucksLogin active" })
        : this.setState({ inputIDBorder: "bucksLogin" });
    });
  };

  handlePWInput = event => {
    const MIN_PASSWORD_LENGTH = 8;
    this.setState({ inputPWValue: event.target.value }, () => {
      this.state.inputPWValue.length >= MIN_PASSWORD_LENGTH
        ? this.setState({ inputPWBorder: "bucksLogin active" })
        : this.setState({ inputPWBorder: "bucksLogin" });
    });
  };

  handleButtonColor = () => {
    const MIN_PASSWORD_LENGTH = 8;
    this.state.inputIDValue.includes("@") &&
    this.state.inputPWValue.length >= MIN_PASSWORD_LENGTH
      ? this.setState({ isButtonActive: true })
      : this.setState({ isButtonActive: false });
  };

  switchPage = () => {
    this.props.history.push("/ListJH");
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
                  className={this.state.inputIDBorder}
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  required
                  onKeyUp={this.handleButtonColor}
                  onChange={this.handleIDInput}
                />
                <input
                  type="password"
                  id="inputPWValue"
                  className={this.state.inputPWBorder}
                  placeholder="비밀번호"
                  required
                  onKeyUp={this.handleButtonColor}
                  onChange={this.handlePWInput}
                />
                <button
                  className={
                    this.state.isButtonActive ? "bucksBtn active" : "bucksBtn"
                  }
                  onClick={this.switchPage}
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
