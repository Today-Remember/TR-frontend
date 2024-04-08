import React from "react";
import "./IntroPage.css";
// import logo from "./Logo/logo.svg";
import Logo from "./Logo/img/logo.png";

const IntroPage = () => {
  return (
    <div>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h2>Today Remember</h2>
      </div>

      <form className="input">
        <input type="text" />
        <br></br>
        <input type="password" id="pw" />
        <br></br>
        <button type="submit">로그인</button>
      </form>
      <button>회원가입</button>
    </div>
  );
};

export default IntroPage;
