import { forwardRef } from "react";
import "../Contact_us/contact_us.css";
const ContactUs=forwardRef((props,ref)=> {
  return (
    <section className="about-us-bg" ref={ref}> 
      <div className="heading-text-style">Contact Us</div>
      <div className="sub-heading-style">
        We offered industries leading course for medical coding & Medical
        billing course for medical coding & Medical billing
      </div>
      <div className="contact-content">
        <img src="/assets/contact_us_bg.png" height={630}></img>
        <div className="contact-form">
          <form>
            <label className="form-title-style">First Name</label>
          </form>
          <input type="text" name="name"  />
          <form style={{ marginTop: 50 }}>
            <label className="form-title-style">Mail-id</label>
          </form>
          <input type="text" name="name"  />
          <form style={{ marginTop: 50 }}>
            <label className="form-title-style">Phone Number</label>
          </form>
          <input type="text" name="name"  />
          <form style={{ marginTop: 50 }}>
            <label className="form-title-style">Message</label>
          </form>
          <input type="text" name="name"  />
          <div className="contact-us-btn">
        Contact Us
     </div>
        </div>
        
      </div>
     
    </section>
  );
});
export default ContactUs;
