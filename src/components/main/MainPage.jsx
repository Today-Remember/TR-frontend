import React, { useState } from "react";
import "./MainPage.css";
import axios from "axios";
import markImage from "./util/mark.png";
import SendButton from "./Send/SendButton.jsx";

const MainPage = () => {
  const [inputText, setInputText] = useState("");
  const [receivedText, setReceivedText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = async () => {
    try {
      console.log("inputText: ", inputText);
      const storedUserLoggedInData = JSON.parse(localStorage.getItem("userData"));
      if (!storedUserLoggedInData || !storedUserLoggedInData.user) {
        console.error("User data not found or userId is null");
        return;
      }
      const userId = storedUserLoggedInData.user;

      const response = await axios.post(
        `${process.env.REACT_APP_API_ROOT}detail`,
        { text: inputText, user_id: userId },  // 본문에 JSON 데이터로 보냄
        {
          headers: {
            Authorization: `Bearer ${storedUserLoggedInData.token}`,
            'Content-Type': 'application/json'  // Content-Type을 JSON으로 설정
          }
        }
      );

      console.log("response: ", response.data);
      setReceivedText(response.data.received_text); // 응답 데이터를 상태에 저장
      setInputText("");
    } catch (error) {
      if (error.response) {
        console.error("Response error:", error.response.data);
        console.error("Response error:", error);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="show_text_box">
        <img src={markImage} alt="Mark" className="mark-image" />
        <div className="textbox">{receivedText}</div>
      </div>
      <div className="main_input_box">
        <input
          className="input"
          value={inputText}
          onChange={handleInput}
          placeholder="당신의 일기를 들려주세요"
        />
        <button className="send-button" onClick={handleClick}>
          <SendButton />
        </button>
      </div>
    </div>
  );
};

export default MainPage;
