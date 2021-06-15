import React, { Component } from "react";
import "./LoginMS.scss";

class LoginMS extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }
  handleIdInput = e => {
    console.log(e.target.value);
    this.setState = { id: e.target.value };
  };
  handlePwInput = e => {
    console.log(e.target.value);
    this.setState = { pw: e.target.value };
  };

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
                onChange={this.handleIdInput}
                className="putId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={this.handlePwInput}
                className="putPw"
                type="password"
                placeholder="비밀번호"
              />
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
