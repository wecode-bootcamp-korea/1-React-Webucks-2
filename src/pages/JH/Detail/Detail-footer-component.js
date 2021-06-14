import React, { Component } from "react";

class DetailFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footerMenu">
          <div className="footList">
            <h5 className="listHeader">company</h5>
            <a href="main.html">한눈에 보기</a>
            <a href="main.html">스타벅스 사명</a>
            <a href="main.html">스타벅스 소개</a>
            <a href="main.html">국내 뉴스룸</a>
            <a href="main.html">세계의 스타벅스</a>
            <a href="main.html">글로벌 뉴스룸</a>
          </div>
          <div className="footList">
            <h5 className="listHeader">corporate sales</h5>
            <a href="main.html">단체 및 기업 구매 안내</a>
          </div>
          <div className="footList">
            <h5 className="listHeader">partnership</h5>
            <a href="main.html">신규 입점 제의</a>
            <a href="main.html">협력 고객사 등록 신청</a>
          </div>
          <div className="footList">
            <h5 className="listHeader">online community</h5>
            <a href="main.html">페이스북</a>
            <a href="main.html">트위터</a>
            <a href="main.html">유튜브</a>
            <a href="main.html">블로그</a>
            <a href="main.html">인스타그램</a>
          </div>
          <div className="footList">
            <h5 className="listHeader">recruit</h5>
            <a href="main.html">채용 소개</a>
            <a href="main.html">채용 지원하기</a>
          </div>
          <div className="footList">
            <h5 className="listHeader">zuckerbucks</h5>
          </div>
        </div>
      </footer>
    );
  }
}

export default DetailFooter;
