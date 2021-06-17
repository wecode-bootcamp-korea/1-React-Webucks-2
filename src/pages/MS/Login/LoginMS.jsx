import React, { Component } from "react";
import "./LoginMS.scss";

class LoginMS extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
    };
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.id.includes("@") && this.state.password.length > 5);
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
                name="id"
                onChange={this.handleInput}
                className="putId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                name="password"
                onChange={this.handleInput}
                className="putPw"
                type="password"
                placeholder="비밀번호"
              />
            </main>
            <section>
              <button
                className={
                  this.state.id.includes("@") && this.state.password.length > 5
                    ? "loginBtn active"
                    : "loginBtn"
                }
              >
                로그인
              </button>
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
