import React from "react";
import "./techstack.css";
import img1 from "../../img/techstack/html.png";
import img2 from "../../img/techstack/figma.png";
import img3 from "../../img/techstack/js.png";
import img4 from "../../img/techstack/TS.png";
import img5 from "../../img/techstack/Redux.png";
import img6 from "../../img/techstack/react.png";
import img7 from "../../img/techstack/bootstrap.png";
import img8 from "../../img/techstack/Sass.png";
import img9 from "../../img/techstack/Tailwind.png";
import img10 from "../../img/techstack/git.png";
import img11 from "../../img/techstack/github.png";
import img12 from "../../img/techstack/firebase.png";
import img13 from "../../img/techstack/next.png";
import img14 from "../../img/techstack/reactstrap.png";
const Techstack = () => {
  return (
    <div id="tech-stack">
      <div className="container">
        <div className="row">
          <h2 className="tech-title">Tech Stack</h2>
          <p className="tech-desc">
            Here is my favourite Tech Stack, languages and frameworks that I use
            every day in most of my projects
          </p>
        </div>
        <div className="row tech-img-container">
          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img1} alt="" />
              </div>
              <div className="skill-name">
                <span>Html+Css</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img3} alt="" />
              </div>
              <div className="skill-name">
                <span>JavaScript</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img4} alt="" />
              </div>
              <div className="skill-name">
                <span>TypeScript</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img13} alt="" />
              </div>
              <div className="skill-name">
                <span>NEXT</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img2} alt="" />
              </div>
              <div className="skill-name">
                <span>Figma</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img6} alt="" />
              </div>
              <div className="skill-name">
                <span>React Js</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img5} alt="" />
              </div>
              <div className="skill-name">
                <span>Redux</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img7} alt="" />
              </div>
              <div className="skill-name">
                <span>Bootstrap</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img14} alt="" />
              </div>
              <div className="skill-name">
                <span>Reactstrap</span>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img8} alt="" />
              </div>
              <div className="skill-name">
                <span>Sass</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img9} alt="" />
              </div>
              <div className="skill-name">
                <span>Tailwind</span>
              </div>
            </div>
          </div> */}
          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img10} alt="" />
              </div>
              <div className="skill-name">
                <span>git</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img11} alt="" />
              </div>
              <div className="skill-name">
                <span>GitHub</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-holder">
              <div className="skill-img me-3">
                <img src={img12} alt="" />
              </div>
              <div className="skill-name">
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
