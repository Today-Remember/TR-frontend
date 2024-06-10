import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ReactComponent as TodaySVG } from "./today.svg";

import "./CalendarStyles.css";

const CalendarPage = () => {
  const [value, setValue] = useState(new Date());
  const [nowDate] = useState(moment().format("YYYY-MM-DD")); // 현재 날짜를 상태로 유지
  const navigate = useNavigate();
  const handleDateChange = async (selectedDate) => {
    console.log(selectedDate); //선택된 날짜
    const formattedDate = `${selectedDate}`;

    setValue(formattedDate);

    navigate(`/detail/${formattedDate}`, { state: { date: value } });
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
    <div className="content">
      <Calendar
        onChange={handleDateChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        tileContent={tileContent} // tileContent 추가
      ></Calendar>
    </div>
  );
};

export default CalendarPage;
