import React from "react";
import "./SigninPage.css";

const handleSubmit = () => {
  // console.log('전송할 정보:', inputValue);
  // 전송 후 입력값 초기화
  // setInputValue('');
};

const SigninPage = () => {
  return( 
  <div>
    <div className="social_login_container">
      <div className="socail_login_text">
        다른 소셜 계정으로 연결
      </div>
      <div className="social_login_box">
        <div className="naver_box">
          <h3>네이버</h3>
        </div>
        <div className="kakao_box">
          <h3>카카오</h3>
        </div>  
      </div>    
    </div>
    <hr />
    <div className="signin_info_box">
      <div className="signin_container">
        별명
        <input className="signin_box"></input>
      </div>
      <div className="signin_container">
        아이디
        <input className="signin_box"></input>
      </div>
      <div className="signin_container">
        비밀번호
        <input className="signin_box"></input>
      </div>
      <div className="signin_container">
        이메일
        <input className="signin_box"></input>
      </div>
      <div className="submit_button_container">
        <button className="submit_button" onClick={handleSubmit}>Sign up</button>
      </div>
    </div>
  </div>
  )
};
export default SigninPage;
