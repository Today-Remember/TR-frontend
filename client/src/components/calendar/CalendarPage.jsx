import React, { useState } from "react";
import Calendar from "react-calendar";
import "./CalendarStyles.css";
import moment from "moment";

const CalendarPage = ({}) => {
  const [value, onChange] = useState();
  const [nowDate, setNowDate] = useState(value);
  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setNowDate(moment(selectedDate).format("YYYY-MM-DD"));
  };
  return (
    <div className="content">
      {/*콘솔로 현재 선택한 날짜 출력*/}
      <div>{console.log({ nowDate })}</div>
      <Calendar
        onChange={handleDateChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
      ></Calendar>
    </div>
  );
};
export default CalendarPage;
