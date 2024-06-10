import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./DetailPage.css";

const DetailPage = () => {
  const location = useLocation();
  const { date } = location.state;
  const [details, setDetails] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get("/detail", {
          params: { date },
        });
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching details: ", error);
      }
    };
    fetchDetails();
  }, [date]);

  return (
    <div>
      <div className="detail_text_box">
        <div className="text">
          {details["일기"] ? details["일기"] : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
