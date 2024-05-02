import React from "react";
import "./detailPage.css";
import { TiThMenu } from "react-icons/ti";

const MainPage = () => {
  return (
    <div>
      <div className="menu_icon">
        <TiThMenu size={30} />
      </div>
      
      <div className="text">
        디테일 페이지
      </div>
    </div>
  )
}

export default MainPage;