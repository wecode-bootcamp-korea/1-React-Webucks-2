import React, { Component } from "react";
import "./LoginMJ.scss";

class LoginMJ extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { id, password } = this.state;
    return (
      <main className="main-container">
        <div className="main-wrap">
          <header className="logo">Webucks</header>
          <form className="login">
            <input
              onChange={this.handleInput}
              className="loginID"
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handleInput}
              className="loginPW"
              name="password"
              type="password"
              placeholder="비밀번호"
            />
            <button
              className={
                id.includes("@") && password.length > 5 ? "active" : "btn"
              }
            >
              로그인
            </button>
          </form>
          <footer className="forgotPW">
            <a className="forgot" href="#none">
              비밀번호를 잊으셨나요?
            </a>
          </footer>
        </div>
      </main>
    );
  }
}
export default LoginMJ;
