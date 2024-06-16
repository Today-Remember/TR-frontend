import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import None from "./util/none.png";
import "./DetailPage.css";

const DetailPage = () => {
  const location = useLocation();
  const { date } = location.state;
  const [details, setDetails] = useState({});
  const [userId, setUserId] = useState("");
  const storedUserLoggedInData = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    
    if (storedUserLoggedInData && storedUserLoggedInData.user) {
      setUserId(storedUserLoggedInData.user);
    } else {
      console.error("User data not found or userId is null");
    }
  }, []);

  console.log(date)
  console.log(userId)

  const fetchDetails = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_ROOT}detail`, {
        params: { date, member_id: userId }
      });

      console.log("API response data:", response.data);
      setDetails(response.data.일기[0].detail);

    } catch (error) {
      console.error("Error fetching details: ", error);
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

 const formatDate = (dateString) => {
  const dateObj = new Date(dateString);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return `${year}년 ${month}월 ${day}일`;
};
  return (
    <><h6>{`${storedUserLoggedInData.user}님`}</h6>
    <div>
      <div className="detail_text_box">
      <h4>{formatDate(date)}</h4>
        <div className="text">
        <p>
          {details !== null ? (
            typeof details === "string" ? (
              details
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
          )}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default DetailPage;
