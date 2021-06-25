/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./LoginSH.scss";

class LoginSH extends Component {
  constructor() {
    super();
    this.state = {
      idValue: "",
      pwValue: "",
      btnColorState: false,
    };
  }

  handleIdInput = event => {
    console.log(event.target.value);
    this.setState({ idValue: event.target.value });
  };

  handlePwInput = event => {
    console.log(event.target.value);
    this.setState({ pwValue: event.target.value });
  };

  btnChangeColor = () => {
    this.state.idValue.includes("@") && this.state.pwValue.length >= 5
      ? this.setState({ btnColorState: true })
      : this.setState({ btnColorState: false });
  };

  render() {
    return (
      <>
        <div className="total">
          <div className="background">
            <header>
              <p>SooBucks</p>
            </header>
            <form onKeyUp={this.btnChangeColor}>
              <nav className="loginInput1">
                <input
                  onChange={this.handleIdInput}
                  type="Text"
                  className="inputId"
                  placeholder=" 전화번호, 사용자 이름 또는 이메일"
                ></input>
              </nav>
              <nav className="loginInput2">
                <input
                  onChange={this.handlePwInput}
                  type="password"
                  className="inputPw"
                  placeholder=" 비밀번호"
                ></input>
              </nav>
              <div className="Login">
                <button className={this.state.btnColorState ? "active" : ""}>
                  로그인
                </button>
              </div>
            </form>
            <footer>
              <a>비밀번호를 잊으셨나요?</a>
            </footer>
          </div>
        </div>
      </>
    );
  }
}
export default LoginSH;
