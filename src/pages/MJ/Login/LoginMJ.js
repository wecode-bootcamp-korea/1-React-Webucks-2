import React, { Component } from "react";
import "./LoginMJ.scss";

class LoginMJ extends Component {
  render() {
    return (
      <main className="main-container">
        <div className="main-wrap">
          <header className="logo">Webucks</header>
          <form className="login">
            <input
              className="loginID"
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="loginPW"
              name="password"
              type="password"
              placeholder="비밀번호"
            />
            <button className="btn active">로그인</button>
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
