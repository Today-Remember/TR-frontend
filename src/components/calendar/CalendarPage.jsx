import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ReactComponent as TodaySVG } from "./today.svg";

import "./CalendarStyles.css";
import styles from "./CalendarPage.module.css";

const CalendarPage = () => {
  const [value, setValue] = useState(new Date());
  const [nowDate] = useState(moment().format("YYYY-MM-DD"));
  const navigate = useNavigate();
  const storedUserLoggedInData = JSON.parse(localStorage.getItem("userData"));
  if (!storedUserLoggedInData || !storedUserLoggedInData.user) {
    console.error("User data not found or userId is null");
    return;
  }
  const handleDateChange = async (selectedDate) => {
    console.log("선택된 날짜:", selectedDate);
    const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
    setValue(selectedDate); // 여기는 Date 객체로 설정
    console.log("value:", formattedDate);
    navigate(`/detail/${formattedDate}`, { state: { date: formattedDate } }); // 포맷된 날짜 문자열 전달
  };

  const tileContent = ({ date }) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    if (formattedDate === nowDate) {
      return (
        <div className="today-tile-content">
          <div className="today-overlay">
            <div className="today-icon">
              <TodaySVG />
            </div>
            <span>Today</span>
          </div>
        </div>
      );
    }
  };

  return (
    <>
    <h6>{`${storedUserLoggedInData.user}님`}</h6>
    <div className={styles.content}>
      <Calendar
        onChange={handleDateChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        tileContent={tileContent}
      />
    </div>
    </>
  );
};

export default CalendarPage;

