import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email me</h4>
            <p>
              <a href="mailto:prathamkamal4u79@gmail.com" data-cursor="disable">
                prathamkamal4u79@gmail.com
              </a>
            </p>
            <h4 style={{ marginTop: '2rem' }}>Do You Need A Designer?</h4>
            <p>
              Request a Quote!
            </p>
          </div>
          <div className="contact-box">
            <h4>About</h4>
            <p style={{ maxWidth: '300px', lineHeight: '1.6' }}>
              I’m a passionate designer with a keen eyes of details. Let’s work together.
            </p>
            <h4 style={{ marginTop: '2rem' }}>Social</h4>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://github.com"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
            </div>
          </div>
          <div className="contact-box">
            <h2>
              Let's work together
            </h2>
            <h5>
              <MdCopyright /> 2026 Pratham Kamal
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
