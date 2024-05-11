import React from "react";
import "./SigninPage.css";

const handleSubmit = () => {
  // 여기서 입력한 정보를 사용하여 서버로 전송하거나 다른 작업을 수행할 수 있습니다.
  // console.log('전송할 정보:', inputValue);
  // 전송 후 입력값 초기화
  // setInputValue('');
};

const SigninPage = () => {
  return( 
  <div>
    <div className="social_login_container">
      다른 소셜 계정으로 연결
      <div className="social_login_box">
        <div className="naver_box">
          <h3>네이버</h3>
        </div>
        <div className="kakao_box">
          <h3>카카오</h3>
        </div>  
      </div>    
    </div>
    <div className="signin_info_box">
      <div className="signin_container">
        별명
        <input className="signin_box"></input>
        <button onClick={handleSubmit}>전송</button>
      </div>
      <div className="signin_container">
        아이디
        <input className="signin_box"></input>
        <button onClick={handleSubmit}>전송</button>
      </div>
      <div className="signin_container">
        비밀번호
        <input className="signin_box"></input>
        <button onClick={handleSubmit}>전송</button>
      </div>
      <div className="signin_container">
        이메일
        <input className="signin_box"></input>
        <button onClick={handleSubmit}>전송</button>
      </div>
    </div>
  </div>
  )
};
export default SigninPage;
