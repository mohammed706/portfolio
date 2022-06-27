import "./contact.css";
import Linkedin from "../../img/linkedin.png";
import github from "../../img/techstack/github.png";
import Facebook from "../../img/Facebook.png";
import Instagram from "../../img/Instagram.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iqqhuoc",
        "template_a0qhv8k",
        formRef.current,
        "HNDsZHWiRoTy993dQ"
      )
      .then(
        result => {
          console.log(result.text);
          setDone(true);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg" />
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me :</h1>
          <div className="c-info">
            <a
              className="c-info-item"
              href="https://www.linkedin.com/in/mohammed-sheikh-khamis-a3078517a/"
              target="_blank"
            >
              <img src={Linkedin} alt="" className="c-icon" />
            </a>
            <a
              className="c-info-item"
              href="https://github.com/mohammed706"
              target="_blank"
            >
              <img src={github} alt="" className="c-icon" />
            </a>
            <a
              className="c-info-item"
              href="https://www.facebook.com/msk.msk.376/"
              target="_blank"
            >
              <img src={Facebook} alt="" className="c-icon" />
            </a>
            <a
              className="c-info-item"
              href="https://www.instagram.com/khamis_10_/?hl=en"
              target="_blank"
            >
              <img src={Instagram} alt="" className="c-icon" />
            </a>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">Feel free to drop me a line:</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
