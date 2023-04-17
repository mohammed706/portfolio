import React, { useState } from "react";
import "./details.css";
import { websites } from "../../websites";

const Webdetails = () => {
  const [visibleTab, setVisibleTab] = useState(websites[0].id);
  const listTitles = websites.map(item =>
    <li
      onClick={() => setVisibleTab(item.id)}
      className={
        visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"
      }
    >
      {item.title}
    </li>
  );
  const listContent = websites.map(item =>
    <div
      className="container-fluid"
      style={visibleTab === item.id ? {} : { display: "none" }}
    >
      <img
        src={item.img}
        className="project-img"
        alt=""
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
      <h3 className="project-title pt-1">
        {item.title}
      </h3>

      <p>
        {item.desc}
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
      <h6 className="pt-2">You can find it:</h6>
      <div className="button-container d-flex align-items-center">
        {item.githublink != null
          ? <button
              className="btn-primary me-3 p-2"
              style={{
                backgroundColor: "#0d1116",
                borderRadius: "10px",
                border: "none"
              }}
            >
              {" "}<a
                className="text-decoration-none text-white "
                href={item.githublink}
                target="_blank"
              >
                GitHub
              </a>
            </button>
          : ""}
        {item.online != null
          ? <button
              className="btn-warning p-2 "
              style={{
                backgroundColor: "#a8dadc",
                borderRadius: "10px",
                border: "none"
              }}
            >
              <a
                className="text-decoration-none text-white"
                href={item.online}
                target="_blank"
              >
                Online
              </a>
            </button>
          : ""}
      </div>
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

export default Webdetails;
