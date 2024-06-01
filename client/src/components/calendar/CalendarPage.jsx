import React, { useState } from "react";
import Calendar from "react-calendar";
import "./CalendarStyles.css";
import moment from "moment";

const CalendarPage = ({}) => {
  const [nowDate, setNowDate] = useState("날짜");
  const [isOpen, setIsOpen] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
  };
  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setIsOpen(false);
    setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
  };
  return (
    <div className="content">
      <div onClick={handleToggleCalendar}>{nowDate}</div>
      <Calendar
        onChange={handleDateChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
      ></Calendar>
    </div>
  );
};
export default CalendarPage;
