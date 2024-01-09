import "../dashboard/dashboard.css";
import "../home/home.css";
import { React, forwardRef, useState } from "react";

import { useNavigate } from "react-router-dom";

const Dashboard=forwardRef((props,ref) =>{
  const navigate = useNavigate();
   return (
      <section className="home-bg" ref={ref}> 
      <div className="header-content">
        <div className="txt-contents">
          <div className="hash-txt-style">
            <div>#Medical coder</div>
            <div>#HealthCare</div> 
          </div>
          <div className="big-txt-style">
          BECOME A MEDICAL CODING SPECIALIST ENJOY A REWARDING CAREER!
          </div>
          <div className="sub-title-style">Provides training and equips them with sound knowledgein all domain and does its best to create job opportunities.</div>
          <div className="apply-btn" style={{marginRight:"70%",marginTop:"23px"}}>Apply Online</div>
        </div>
        <div>
        <img src="/assets/main-banner-bg.png"></img> 
        </div>
        
      </div>
    </section>
  );
});
export default Dashboard;