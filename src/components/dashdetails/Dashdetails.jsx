import React, { useState } from "react";
import "./details.css";
import { project } from "../../data";

const Dashdetails = () => {
  const [visibleTab, setVisibleTab] = useState(project[0].id);
  const listTitles = project.map(item =>
    <li
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"
      }
    >
      {item.title}
    </li>
  );
  const listContent = project.map(item =>
    <div
      className="container-fluid"
      style={visibleTab === item.id ? {} : { display: "none" }}
    >
      <img
        src={item.img}
        className="project-img"
        style={{ objectFit: "cover", borderRadius: "10px" }}
        alt=""
      />
      <h3 className="project-title pt-1">
        {item.title}
      </h3>

      <p>
        {item.desc1}
      </p>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img className="dash-img" src={item.img1} alt="" />
        </div>
        <div className="col-md-6 col-sm-12">
          <img className="dash-img" src={item.img2} alt="" />
        </div>
        <div className="col-md-6 col-sm-12">
          <img className="dash-img" src={item.img3} alt="" />
        </div>
        <div className="col-md-6 col-sm-12">
          <img className="dash-img" src={item.img4} alt="" />
        </div>
      </div>
      <p>
        {item.desc2}
      </p>
      <p>
        {item.desc3}
      </p>
      <h6>Tools:</h6>

      {item.tools.map(tool => {
        return (
          <span key={tool.id} className="tools">
            <div
              style={{
                color: `${tool.color}`,
                backgroundColor: `${tool.back}`
              }}
            >
              {tool.name}
            </div>
          </span>
        );
      })}
    </div>
  );
  return (
    <div className="row tab pt-5">
      <div className="col-md-4 col-lg-4 col-sm-12">
        <ul className="tabs-titles ">
          {listTitles}
        </ul>
      </div>
      <div className="col-md-8 col-lg-8 col-sm-12 tab-content">
        {listContent}
      </div>
    </div>
  );
};

export default Dashdetails;
