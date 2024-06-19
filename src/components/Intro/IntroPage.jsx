import React, { useState, useContext } from "react";
import "./IntroPage.css";
import Logo from "./Logo/img/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../shared/context/AuthContext'; 


const IntroPage = ({}) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_ROOT}login`, {
        id,
        password
      });

      if (response.status === 200) {
        console.log("Login successful:", response.data);

         // 로컬에 저장
         const userData = {
          user: response.data.user,
          token: response.data.token,
          // expiration: tokenExpirationDate.toISOString(),
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        
        login();
        navigate("/main");
      } else {
        
        console.error("Login failed:", response.data);
      }
    } catch (error) {
      if (error.response) {
        alert("다시 시도해 주세요")
        console.error("Login failed:", error.response.data);
      } else {
        console.error("An error occurred during login:", error);
        alert("다시 시도해 주세요")
      }
    }
  };

  return (
    <div className="intro_content">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <p>Today Remember</p>
      </div>

      <form className="inputbox" onSubmit={handleLogin}>
        <h3>아이디</h3>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        <h3>비밀번호</h3>
        <input type="password" id="pw" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="find_id_pw">
          <h4 style={{ textDecoration: "underline" }}>비밀번호를 잊어버렸어요</h4>
        </div>
        <button className="login" type="submit">
          <p>로그인</p>
        </button>
        <br />
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
