import React, { useState, useRef } from "react";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import { useLocation } from "react-router-dom";
import Backdrop from "../../UIElements/Backdrop";
import { TiThMenu } from "react-icons/ti";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef();

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const showMenuButton = location.pathname !== "/" && location.pathname !== "/signin";

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer ref={drawerRef} show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      {showMenuButton && (
        <div className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <TiThMenu size={30} />
        </div>
      )}
    </React.Fragment>
  );
};

export default MainNavigation;
