import React from "react";
import "./IntroPage.css";
const IntroPage = () => {
  return (
    <div>
      <form className="input">
        <h3>아이디</h3>
        <input type="text" id="id" />
        <br></br>
        <h3>비밀번호</h3>
        <input type="password" id="pw" />
        <br></br>
        <button className="login" type="submit">로그인</button>
      </form>
      <button className="join_member">회원가입</button>
    </div>
  );
};

export default IntroPage;
