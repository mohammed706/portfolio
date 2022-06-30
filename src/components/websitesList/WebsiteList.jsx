import React from "react";
import "./websitelist.css";
import { Link } from "react-router-dom";
const WebsiteList = ({ item }) => {
  return (
    <div className="card h-100 text-center shadow">
      <img src={item.img} className="card-img-top" height="250px" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "#222" }}>
          {item.title}
        </h5>

        <Link
          to={`/website/${item.id}`}
          className="btn "
          style={{ backgroundColor: "#218db8", color: "#fff" }}
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default WebsiteList;
