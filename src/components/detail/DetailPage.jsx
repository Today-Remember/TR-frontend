import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import None from "./util/none.png";
import "./DetailPage.css";

const DetailPage = () => {
  const location = useLocation();
  const { date } = location.state;
  const [details, setDetails] = useState({}); 

  const fetchDetails = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_ROOT}detail`, {
        params: { date },
      });
      console.log("API response data:", response.data);
      setDetails(response.data.일기[0].detail);
    } catch (error) {
      console.error("Error fetching details: ", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [date]);

  useEffect(() => {
    console.log("State data:", details);
  }, [details]);

  return (
    <div>
      
      <div className="detail_text_box">
        <div className="text">
          {details !== null ? (
            typeof details === "string" ? (
              details
            ) : (
              <div className="none"><p>작성된 일기가 없습니다</p> <img src={None} alt="null diary" className="nulldiary" /></div>
            )
          ) : (
            <div className="none"><p>작성된 일기가 없습니다</p> <img src={None} alt="nulldiary" /></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
