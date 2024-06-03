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
    console.log(inputText);
    try {
      const response = await axios.post("/text", {
        text: inputText,
      });
      console.log(response.data);
      setReceivedText(response.data.received_text);
    } catch (error) {
      console.log("Error!, data: ", error);
    }
  };

  // 백엔드 데이터 수신
  useEffect(() => {
    const fetchText = async () => {
      try {
        const response = await axios.get("/aitext");
        setReceivedText(response.data.received_text);
      } catch (error) {
        console.log("Error!, data: ", error);
      }
    };

    fetchText();
  }, []);

  // const text =
  //   "오늘은 오전은 맑은 날씨였지만 바람이 많이 불었다. 오후에는 비가 조금 내렸다.비가와서 우산을 쓰고 집으로 왔다.";
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
