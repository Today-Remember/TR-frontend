import React, { useState } from "react";
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:8000/text", {
        text: inputText,
      });
      console.log("response: ", response.data);
    } catch (error) {
      console.log("Error!, data: ", error);
    }
  };

  const text =
    "오늘은 오전은 맑은 날씨였지만 바람이 많이 불었다. 오후에는 비가 조금 내렸다.비가와서 우산을 쓰고 집으로 왔다.";
  return (
    <div>
      <div className="show_text_box">
        <div className="text">{text}</div>
      </div>
      <div className="input_box">
        <input className="input" value={inputText} onChange={handleInput}></input>
        <button className="button" onClick={handleClick}>
          분석하기
        </button>
      </div>
    </div>
  );
};

export default MainPage;
