import React from "react";
import "./mainPage.css";
import { TiThMenu } from "react-icons/ti";

const MainPage = () => {
  return (
    <div>
      <div className="menu_icon">
        <TiThMenu size={30} />
      </div>
      
      <div className="text">
        오늘은 오전은 맑은 날씨였지만 바람이 많이 불었다.
      </div>
    </div>
  )
}

export default MainPage;