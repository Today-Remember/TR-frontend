import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import None from "./util/none.png";
import "./DetailPage.css";

const DetailPage = () => {
  const location = useLocation();
  const { date } = location.state;
  const [details, setDetails] = useState(null); // 초기값 null로 설정
  const [userId, setUserId] = useState("");
  const storedUserLoggedInData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    if (storedUserLoggedInData && storedUserLoggedInData.user) {
      setUserId(storedUserLoggedInData.user);
    } else {
      console.error("User data not found or userId is null");
    }
  }, []);

  // 일기를 불러오는 함수
  const fetchDetails = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_ROOT}detail`, {
        params: { date, member_id: userId }
      });

      console.log("API response data:", response.data);
      if (response.data.일기.length > 0) {
        setDetails(response.data.일기[0].detail);
      } else {
        setDetails(null); // 일기가 없는 경우 null로 설정
      }
    } catch (error) {
      console.error("Error fetching details: ", error);
    }
  };

  // 삭제 버튼 클릭 시 실행되는 함수
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_ROOT}delete`, {
        data: { date, member_id: userId }
      });

      console.log("Delete response:", response.data);

      // 삭제 후 일기 상세 정보를 다시 불러옴
      fetchDetails();

    } catch (error) {
      console.error("Error deleting diary: ", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchDetails();
    }
  }, [userId, date]);

  useEffect(() => {
    console.log("State data:", details);
  }, [details]);

  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <>
      <h6>{`${storedUserLoggedInData.user}님`}</h6>
      <div>
        <div className="detail_text_box">
          <h4>{formatDate(date)}</h4>
          <div className="text">
            <p>
              {details !== null ? (
                typeof details === "string" ? (
                  <>
                  {details}
                  <button className="delete-button" onClick={handleDelete}>삭제</button>
                </>
                ) : (
                  <div className="none">
                    <p>작성된 일기가 없습니다</p>
                    <img src={None} alt="null diary" className="nulldiary" />
                  </div>
                )
              ) : (
                <div className="none">
                  <p>작성된 일기가 없습니다</p>
                  <img src={None} alt="nulldiary" />
                </div>
              )}
            </p>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default DetailPage;
