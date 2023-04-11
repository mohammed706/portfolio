import "./intro.css";
import Me from "../../img/me1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Intro = () => {
  AOS.init({
    duration: 1200
  });
  return (
    <div className="i" id="home">
      <div className="i-left" data-aos="fade-right">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Welcome To My Portfolio!</h2>
          <h1 className="i-name">Mohammed Sheikh Khamis</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front-End Developer</div>
              <div className="i-title-item">React Js Developer</div>
              <div className="i-title-item">Web Designer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className="i-right" data-aos="fade-left">
        <div className="i-bg">
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
