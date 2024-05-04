import React, { useState } from "react";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../../UIElements/Backdrop";
import { TiThMenu } from "react-icons/ti";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <div className="main-navigation__menu-btn" onClick={openDrawerHandler}>
        <TiThMenu size={30} />
      </div>
      {/*사이드 드로어를 열 버튼*/}
    </React.Fragment>
  );
};
export default MainNavigation;
