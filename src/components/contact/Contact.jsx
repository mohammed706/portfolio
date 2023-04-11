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
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  AOS.init({
    duration: 1200
  });
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
          Swal.fire(
            "Thank you!",
            "Operation completed successfully",
            "success"
          );
          formRef.current = "";
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c mt-4" id="contact">
      <div className="c-bg" />

      <h2 className="text-center">Get in touch</h2>
      <div className="c-wrapper">
        <div className="c-left" data-aos="zoom-in">
          <div className="desc-info">
            Either you have an inquiry about a potential project or you want to
            contact to hire me , a question about programming or whatever pops
            into your mind, drop me a message and I will get back to you as soon
            as possible.
          </div>
          <p
            style={{
              display: "block",
              "margin-block-start": "1em",
              "margin-block-end": "1em",
              "margin-inline-start": "0px",
              " margin-inline-end": "0px"
            }}
          >
            <b>ADDRESS : </b>
            Turkey-Istanbul
            <br />
            <b>EMAIL : </b>
            mohammedsheikhkhamis@gmail.com
            <br />
            <b>WEBSITE : </b>
            https://mohammedsheikhkhamis.vercel.app
          </p>
          <p className="m-0">or you can find me here : </p>
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
        <div className="c-right" data-aos="zoom-in-up">
          <p className="c-desc">Feel free to drop me a line:</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              required
            />
            <button className="w-100">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
