import "../footer/footer.css";
function Footer() {
  return (
    <section className="footer-bg">
      <div className="footer-contents">
        <img src="/assets/footer-logo.png"></img>
        <div>
          <div className="main-heading-style">Quick Links</div>
          <div className="quick-sub-heading-style">Course</div>
          <div className="quick-sub-heading-style">Training</div>
          <div className="quick-sub-heading-style">About Us</div>
          <div className="quick-sub-heading-style">Blog</div>
          <div className="quick-sub-heading-style">Contact Us</div>
        </div>
        <div>
          <div className="main-heading-style">Follow Us On</div>
          <div className="follow-links">
            <img src="/assets/Facebook.png"></img>
            <img src="/assets/Twitter.png"></img>
          </div>
          <div className="terms-policy">Terms and condition</div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
