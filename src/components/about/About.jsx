import "./about.css";
import Award from "../../img/award.JPG";
import Me from "../../img/me2.jpg";
const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg" />
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hi there ! I'm Mohammed , Front-end developer With{" "}
          <span>React Js</span> , technical Writer and open source contributer.
        </p>
        <p className="a-desc">
          I have worked in web development for more than four years now, I have
          built many websites using design languages, many web applications and
          dashboards using React Js, in addition I worked with a team on
          building many responsive applications.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Full Stack Developer Track 2018</h4>
            <p className="a-award-desc">
              I faced many challenges, but this was the best of them, the course
              presented by the One Million Arab Coders Initiative, the
              initiative of His Highness<span>
                {" "}Sheikh Mohammed bin Rashid Al Maktoum
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
