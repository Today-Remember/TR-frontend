import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'; 
import "./NavLinks.css";

const NavLinks = (props) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // 인증 상태를 false로 변경
    localStorage.removeItem("userData"); // 로컬 스토리지에서 userData 삭제
    navigate("/"); // 홈 페이지로 이동
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/main">
          일기 쓰기
        </NavLink>
        <hr />
      </li>
      <li>
        <NavLink to="/calendar">나의 일기장</NavLink>
        <hr />
      </li>
      <li>
        <NavLink to="/help">정보</NavLink>
        <hr />
      </li>
        <li>
          <div onClick={handleLogout} className="nav-link-button">
            로그아웃
          </div>
          <hr />
        </li>
    </ul>
  );
};

export default NavLinks;
