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
    // json 형식으로 보내는 방법
    try {
      console.log("inputText: ", inputText);

      const response = await axios.post("/detail", { text: inputText });

      console.log("response: ", response.data);
      setReceivedText(response.data.received_text); // 응답 데이터를 상태에 저장
      setInputText("");
    } catch (error) {
      if (error.response) {
        // 서버가 2xx 외의 상태 코드로 응답한 경우
        console.error("Response error:", error.response.data);
        console.error("Response error:", error);
      } else if (error.request) {
        // 요청이 전송되었지만 응답을 받지 못한 경우
        console.error("Request error:", error.request);
      } else {
        // 요청을 설정하는 중에 발생한 에러
        console.error("Error:", error.message);
      }
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
