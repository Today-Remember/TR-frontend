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
        <hr></hr>
      </li>
      <li>
        <NavLink to="/calendar">나의 일기장</NavLink>
        <hr></hr>
      </li>
      <li>
        <NavLink to="/help">도움말</NavLink>
        <hr></hr>
      </li>
      <li>
        <NavLink to="/">로그아웃</NavLink>
        <hr></hr>
      </li>
    </ul>
  );
};

export default NavLinks;
