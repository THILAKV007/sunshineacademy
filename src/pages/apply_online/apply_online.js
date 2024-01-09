import { React } from "react";
import "../apply_online/apply_online.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Shared/navbar";
const ApplyOnline = ({innerRefs}) => {
  
  const dashboardRef=innerRefs.dashboardRef; 
  const servicesRef=innerRefs.servicesRef;
  const coursesRef=innerRefs.coursesRef;
  const aboutUsRef=innerRefs.aboutUsRef;
  const contactUsRef=innerRefs.contactUsRef;

  
  return (
    <section className="apply-online-bg">
      <div>
       <NavBar innerRefs={{dashboardRef,servicesRef,coursesRef, aboutUsRef, contactUsRef}}/> 
        <div className="dynamic-forms-style">
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
          <div className="submit-btn">Submit Message</div>
        </div>
      </div>
    </section>
  );
};
export default ApplyOnline;
