import React, { useState, useEffect } from "react";
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
  const [inputText, setInputText] = useState("");
  const [receivedText, setReceivedText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = async () => {
    try {
      console.log("inputText: ", inputText);
      console.log("Type", typeof inputText);
      const response = await axios.post("/detail", {
        detail: inputText
      });
      console.log("response: ", response.data);
      setReceivedText(response.data.received_text); // 응답 데이터를 상태에 저장
    } catch (error) {
      console.log("PostError!, data: ", error);
    }
  };
  

  return (
    <div className="container">
      <div className="show_text_box">
        <div className="textbox">{receivedText}</div>
      </div>
      <div className="main_input_box">
        <input className="input" value={inputText} onChange={handleInput} />
        <button className="send-button" onClick={handleClick}>
          보내기
        </button>
      </div>
    </div>
  );
};

export default MainPage;
