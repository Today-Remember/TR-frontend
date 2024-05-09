import React from "react";
import "./SigninPage.css";

const SigninPage = () => {
  return( 
  <div>
    <div className="social_login_container">
      다른 소셜 계정으로 연결
      <div className="social_login_box">
        <div className="naver_box">
          <h3>네이버</h3>
        </div>
        <div className="kakao_box">
          <h3>카카오</h3>
        </div>  
      </div>    
    </div>
    <div className="login_box">
      <div>
        별명
        <div>
          
        </div>
      </div>
      <div>
        아이디
        <div>

        </div>
      </div>
      <div>
        비밀번호
        <div>

        </div>
      </div>
      <div>
        이메일
        <div>

        </div>
      </div>
    </div>
  </div>
  )
};
export default SigninPage;
