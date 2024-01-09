import "../specilization/specialization.css";

function OurSpecialization() {
  return (
    <section className="about-us-bg">
      <div className="heading-text-style">Our Specialization</div>
      <div className="specialization-types">
        <div className="types-bg">
          <span className="set-bg-circle">
            <img src="/assets/medical-coding.png" style={{ padding: 16 }}></img>
          </span>
          <span className="specialization-types-style">Medical coding</span>
        </div>
        <div className="types-bg">
          <span className="set-bg-circle">
            <img
              src="/assets/medical-billing.png"
              style={{ padding: 16 }}
            ></img>
          </span>
          <span className="specialization-types-style">Medical Billing</span>
        </div>
        <div className="types-bg">
          <span className="set-bg-circle">
            <img
              src="/assets/health-insurance.png"
              style={{ padding: 16 }}
            ></img>
          </span>
          <span className="specialization-types-style">
            Healthcare Training
          </span>
        </div>
      </div>
      <div className="explanation">
        <ul>
          <li className="explanation-style">
            Faculties are having 20+ years of real-time coding experience in
            multi-specialty coding with multiple certification
          </li>
          <li className="explanation-style">
            Individual attention to all the students
          </li>
          <li className="explanation-style">
            All trained students shall be placed in reputed companies
          </li>
          <li className="explanation-style">
            Not only we will teach you the skills and knowledge, but we will
            also provide you tips and guidance for achieving your career goals
          </li>
        </ul>
      </div>
      <div style={{color:"#6C6565",fontSize:34,fontWeight:300,textAlign:"center",marginTop:105}}>
      All of us at SSA (Sun Shine Academy), look forward to helping you get the career training you need to get ahead in life.<br/><br/>Enroll today – and take the next step toward a brighter tomorrow.
     </div>
     <div className="enroll-btn">
        Enroll Now
     </div>
    </section>
  );
}
export default OurSpecialization;
