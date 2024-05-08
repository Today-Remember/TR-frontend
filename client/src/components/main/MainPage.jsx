import React from "react";
import SendButton from "./Send/SendButton";
import "./MainPage.css";

const MainPage = () => {
  const text =
    "오늘은 오전은 맑은 날씨였지만 바람이 많이 불었다. 오후에는 비가 조금 내렸다.비가와서 우산을 쓰고 집으로 왔다.";
  return (
    <div>
      <div className="show_text_box">
        <div className="text">{text}</div>
      </div>
      <div className="input_box">
        <input className="input"></input>
        <div className="send-button">
          <SendButton />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
