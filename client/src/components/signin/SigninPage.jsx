import React from "react";
import "./SigninPage.css";
import { ReactComponent as Kakao } from "../signin/SocialLogin/icon/kakao.svg";
import { ReactComponent as Naver } from "../signin/SocialLogin/icon/naver.svg";
const handleSubmit = () => {
  // console.log('전송할 정보:', inputValue);
  // 전송 후 입력값 초기화
  // setInputValue('');
};

const SigninPage = () => {
  return (
    <div className="content">
      <div className="social_login_container">
        <h3>다른 소셜 계정으로 연결</h3>
        <div className="social_login_box">
          <div>
            <Kakao />
          </div>
          <div>
            <Naver />
          </div>
        </div>
      </div>
      <div className="signin_info">
        <div className="signin_container">
          <p>별명</p>
          <input
            className="signin_box"
            type="text"
            placeholder="별명을 입력해주세요."
          ></input>
        </div>
        <div className="signin_container">
          <p>아이디</p>
          <input
            className="signin_box"
            type="text"
            placeholder="아이디를 입력해주세요."
          ></input>
        </div>
        <div className="signin_container">
          <p>비밀번호</p>
          <input
            className="signin_box"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          ></input>
        </div>
        <div className="signin_container">
          <p>비밀번호 확인</p>
          <input
            className="signin_box"
            type="password"
            placeholder="이메일을 입력해주세요"
          ></input>
        </div>
      </div>
      <div className="submit_button_container">
        <button className="submit_button" onClick={handleSubmit}>
          <p>Sign up</p>
        </button>
      </div>
    </div>
  );
};
export default SigninPage;
