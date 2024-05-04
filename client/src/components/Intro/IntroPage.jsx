import React from "react";
import "./IntroPage.css";

import Logo from "./Logo/img/logo.png";
import { NavLink } from "react-router-dom";
const IntroPage = () => {
  return (
    <div>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h2>Today Remember</h2>
      </div>

      <form className="input">
        <h3>아이디</h3>
        <input type="text" id="id" />
        <h3>비밀번호</h3>
        <input type="password" id="pw" />
        <div className="find_id_pw">
          <h4>비밀번호를 잊어버렸어요</h4>
        </div>
        <button className="login" type="submit">
          로그인
        </button>
        <br></br>
        <NavLink to="signin" style={{ textDecoration: "none" }}>
          <button className="join_member">회원가입</button>
        </NavLink>
      </form>
    </div>
  );
};

export default IntroPage;
