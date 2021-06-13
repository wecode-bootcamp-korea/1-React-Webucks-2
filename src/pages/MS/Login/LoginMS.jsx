import React, { Component } from "react";
import "./LoginMS.scss";
import "./LoginFunction";

class LoginMS extends Component {
  render() {
    return (
      <>
        <body className="entirewrapper">
          <div className="box">
            <header className="headline">
              <h1>Mintabucks</h1>
            </header>
            <main className="puts">
              <input
                className="putId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input className="putPw" type="text" placeholder="비밀번호" />
            </main>
            <section>
              <button className="loginBtn">로그인</button>
            </section>
            <footer className="missPw">
              <a
                className="pwLink"
                href="https://www.instagram.com/accounts/password/reset/"
              >
                비밀번호를 잊으셨나요?
              </a>
            </footer>
          </div>
        </body>
      </>
    );
  }
}

export default LoginMS;
