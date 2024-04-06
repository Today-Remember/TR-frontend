import React from "react";
import "./IntroPage.css";
const IntroPage = () => {
  return (
    <div>
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
