import React, { useState } from "react";
import "./SigninPage.css";
import axios from "axios";
import { ReactComponent as Kakao } from "../signin/SocialLogin/icon/kakao.svg";
import { ReactComponent as Naver } from "../signin/SocialLogin/icon/naver.svg";

const SigninPage = () => {
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      // 회원가입 정보
      const signUpData = {
        id: username,
        name: nickname,
        password: password,
        email: email,
      };
      // 회원가입 요청 보내기
      const response = await axios.post("/signup", signUpData);

      // 응답 처리
      console.log(response.data);
    } catch (error) {
      console.error("Error occurred during sign up:", error);
    }
  };

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
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          ></input>
        </div>
        <div className="signin_container">
          <p>아이디</p>
          <input
            className="signin_box"
            type="text"
            placeholder="아이디를 입력해주세요."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="signin_container">
          <p>비밀번호</p>
          <input
            className="signin_box"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="signin_container">
          <p>email</p>
          <input
            className="signin_box"
            type="text"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
