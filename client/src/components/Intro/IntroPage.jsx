import React from "react";
import "./IntroPage.css";

import Logo from "./Logo/img/logo.png";
import { NavLink } from "react-router-dom";
const IntroPage = () => {
  return (
    <div className="content">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h2>Today Remember</h2>
      </div>

      <form className="inputbox">
        <h3>아이디</h3>
        <input type="text" id="id" />
        <h3>비밀번호</h3>
        <input type="password" id="pw" />
        <div className="find_id_pw">
          <h4 style={{ textDecoration: "underline" }}>
            비밀번호를 잊어버렸어요
          </h4>
        </div>
        <button className="login" type="submit">
          <p>로그인</p>
        </button>
        <br></br>
        <NavLink to="signin" style={{ textDecoration: "none" }}>
          <button className="join_member">
            <p>회원가입</p>
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default IntroPage;
