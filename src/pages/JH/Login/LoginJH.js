import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Login/LoginJH.scss";

class LoginJH extends Component {
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
                  id="loginID"
                  className="bucksLogin"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  required
                />
                <input
                  type="password"
                  id="loginPW"
                  className="bucksLogin"
                  placeholder="비밀번호"
                  required
                />
                <Link className="bucksBtn" to="/ListJH">
                  로그인
                </Link>
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
