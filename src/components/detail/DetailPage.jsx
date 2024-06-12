// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import "./DetailPage.css";

// const DetailPage = () => {
//   const location = useLocation();
//   const { date } = location.state;
//   const [details, setDetails] = useState("");

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const response = await axios.get("/detail", {
//           params: { date },
//         });
//         setDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching details: ", error);
//       }
//     };
//     fetchDetails();
//   }, [date]);

//   return (
//     <div>
//       <div className="detail_text_box">
//         <div className="text">
//           {details["일기"] ? details["일기"] : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailPage;


// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import "./DetailPage.css";

// const DetailPage = () => {
//   const location = useLocation();
//   const { date } = location.state;
//   const [details, setDetails] = useState({}); // 초기 상태를 빈 객체로 설정

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const response = await axios.get("/detail", {
//           params: { date },
//         });
//         console.log("API 응답 데이터:", response); // 디버깅 출력
//         setDetails(response.data.일기);
//       } catch (error) {
//         console.error("Error fetching details: ", error);
//       }
//     };
//     fetchDetails();
//   }, [date]);

//   return (
//     <div>
//       <div className="detail_text_box">
//         <div className="text">
//           {details["일기"]
//             ? (typeof details["일기"] === "string" ? details["일기"] : "Invalid data format")
//             : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailPage;





import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./DetailPage.css";

const DetailPage = () => {
  const location = useLocation();
  const { date } = location.state;
  const [details, setDetails] = useState({}); // 초기 상태를 빈 객체로 설정

  const fetchDetails = async () => {
    try {
      const response = await axios.get("/detail", {
        params: { date },
      });
      console.log("API 응답 데이터:", response); // 디버깅 출력
      setDetails(response.data.일기[0].detail);
    } catch (error) {
      console.error("Error fetching details: ", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [date]); // date가 변경될 때마다 실행되도록 설정

  useEffect(() => {
    console.log("상태 데이터:", details); // 업데이트된 상태를 확인
  }, [details]); // details가 변경될 때마다 실행되도록 설정

  return (
    <div>
      <div className="detail_text_box">
        <div className="text">
          {details !== null ? (
            typeof details === "string" ? (
              details
            ) : (
              "Invalid data format"
            )
          ) : (
            "일기가 없습니다"
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
