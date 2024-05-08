import React from "react";
import "./IntroPage.css";
// import logo from "./Logo/logo.svg";
import Logo from "./Logo/img/logo.png";

const IntroPage = () => {
  return (
    <div className="content">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h2>Today Remember</h2>
      </div>

      <form className="input">
        <h3>아이디</h3>
        <input type="text" id="id" />
        <br></br>
        <h3>비밀번호</h3>
        <input type="password" id="pw" />
        <br></br>
        <div className="find_id_pw">
          <h3>비밀번호를 잊어버렸어요</h3>
        </div>
        <br></br>
        <button className="login" type="submit">
          로그인
        </button>
        <br></br>
        <button className="join_member">회원가입</button>
      </form>
    </div>
  );
};

export default IntroPage;
