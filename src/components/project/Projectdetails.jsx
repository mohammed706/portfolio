import React from "react";
import { useParams } from "react-router-dom";
import { project } from "../../data";
import Dashdetails from "../dashdetails/Dashdetails";
import Webdetails from "./../dashdetails/webdetails";
const Projectdetails = () => {
  return (
    <div className="project-page" style={{ backgroundColor: "#f4fafc" }}>
      <div className="container py-3">
        <div
          className="section-title text-center"
          style={{ fontSize: "22px", fontWeight: "500" }}
        >
          My Projects
        </div>
        <div className="row mt-3">
          <ul
            className="nav nav-tabs pt-3 d-flex justify-content-center"
            id="myTab"
            role="tablist"
            style={{ border: "none" }}
          >
            <li className="nav-item " role="presentation">
              <button
                className="nav-link active"
                id="dash-tab"
                data-bs-toggle="tab"
                data-bs-target="#dash"
                type="button"
                role="tab"
                aria-controls="dash"
                aria-selected="true"
              >
                Dashboards
              </button>
            </li>
            <li className="nav-item ms-2" role="presentation">
              <button
                className="nav-link"
                id="sites-tab"
                data-bs-toggle="tab"
                data-bs-target="#sites"
                type="button"
                role="tab"
                aria-controls="sites"
                aria-selected="false"
              >
                Websites
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="dash"
            role="tabpanel"
            aria-labelledby="dash-tab"
          >
            <Dashdetails />
          </div>
          <div
            class="tab-pane fade"
            id="sites"
            role="tabpanel"
            aria-labelledby="sites-tab"
          >
            <Webdetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectdetails;
