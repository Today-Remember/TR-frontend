import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";
const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/main" exact>
          일기 쓰기
        </NavLink>
      </li>
      <li>
        <NavLink to="/calander">나의 일기장</NavLink>
      </li>
      <li>
        <NavLink to="/help">도움말</NavLink>
      </li>
      <li>
        <NavLink to="/">로그아웃</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
