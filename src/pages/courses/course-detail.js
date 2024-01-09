import NavBar from "../../Shared/navbar";
import { React, useState } from "react";
import "../apply_online/apply_online.css";
import "../courses/course.css";
import { useLocation } from "react-router-dom";
function CourseDetail({innerRefs}) {
  const dashboardRef=innerRefs.dashboardRef; 
  const servicesRef=innerRefs.servicesRef;
  const coursesRef=innerRefs.coursesRef;
  const aboutUsRef=innerRefs.aboutUsRef;
  const contactUsRef=innerRefs.contactUsRef;
    const data = useLocation();
    console.log("teh prop is :",data);
  return (
    <section className="apply-online-bg">
      <NavBar innerRefs={{dashboardRef,servicesRef,coursesRef, aboutUsRef, contactUsRef}}/>
      <div className="course-heading">
        {data.state.type==1 ? "BMCT":data.state.type==2?"PCCT":"Placements"}
      </div>
      <div className="apply-course">
          <div>
            <ul>
              <li className="course-detail-style">Get a complete understanding about us healthcare & Medical coding</li>
              <li className="course-detail-style">Get the practical knowledge on using ICD 10 CM, CPT and HCPCS</li>
              <li className="course-detail-style">Trained to face the interview with payer & Providers coding organizations</li>
              <li className="course-detail-style">Get an opportunity to join as a fresher</li>
              <li className="course-detail-style">Get placement Assistance from sunshine academy</li>
            </ul>
          </div>
          <div className="course-apply-dialog-style">
          <div>
            <form style={{ marginTop: 10 }}>
              <label className="form-title-style">Your Name</label>
            </form>
            <input type="text" name="name" />
          </div>
          <form style={{ marginTop: 40 }}>
            <label className="form-title-style">Your Email-id</label>
          </form>
          <input type="text" name="name" />
          <form style={{ marginTop: 40 }}>
            <label className="form-title-style">Your phone number</label>
          </form>
          <input type="text" name="name" />
          <form style={{ marginTop: 40 }}>
            <label className="form-title-style">Location</label>
          </form>
          <input type="text" name="name" />
          <form style={{ marginTop: 40 }}>
            <label className="form-title-style">Message</label>
          </form>
          <input type="text" name="name" />
          <div className="submit-btn">Apply Online</div>
        </div>
      </div>
    </section>
  );
}
export default CourseDetail;
