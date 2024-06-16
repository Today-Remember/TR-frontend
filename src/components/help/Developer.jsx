import React from "react";
import "./Developer.css";

const Developer = () => {
  const teamMembers = [
    { 
      name: "신지훈", 
      position: "프론트 & 백", 
      bio: "DB 스키마 작성 <br/> DB 구현 <br/> 로그인, 회원가입 api 구현 <br/> CORS 설정 <br/>FastAPI로직 구현 <br/> OPEN AI gpt-3.5-turbo모델 연동 <br/> React와 FastAPI간의 통신 구현" 
    },
    { 
      name: "황도연", 
      position: "프론트 & 백", 
      bio: "React 보일러 플레이트 작성 및 라우팅<br/>React Calender 컴포넌트를 이용하여 캘린더 페이지 구현과 오늘 날짜 마킹<br/>Side drawer 내비게이션과 Backdrop 구현<br/>메인페이지와 디테일페이지 디자인 보완 <br/>OPEN AI gpt-3.5-turbo모델 연동을 통한 인공지능 답변 처리 " 
    }
  ];

  return (
    <div className="team-info">
      <h2>팀원 정보</h2>
      {teamMembers.map((member, index) => (
        <div key={index} className="member">
          <h3>{member.name}</h3>
          <p><strong>직책: {member.position}</strong></p>
          <p dangerouslySetInnerHTML={{ __html: member.bio }}></p>
        </div>
      ))}
    </div>
  );
};

export default Developer;
