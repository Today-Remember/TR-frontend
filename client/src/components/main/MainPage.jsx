import React from "react";
import "./MainPage.css";
import { FaArrowUp } from "react-icons/fa";

const MainPage = () => {
  return (
    <div>
      <div className="text_box">
        <div className="text">
          오늘은 오전은 맑은 날씨였지만 바람이 많이 불었다.
          오후에는 비가 조금 내렸다.
          비가와서 우산을 쓰고 집으로 왔다.
        </div>
      </div>
      <div className="input_box">
        <div className="input">
          당신의 일기를 작성해주세요
        </div>
        <div className="send_input">
          send
          <FaArrowUp size={13}/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
