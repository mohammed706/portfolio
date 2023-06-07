import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
const WebsiteList = ({ item }) => {
  return (
    <Link className="card h-100 shadow p-2" to={"/projects"}>
      <img
        src={item.img}
        className="card-img-top p-img"
        height="250px"
        style={{ objectFit: "cover", borderRadius: "10px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "#222" }}>
          {item.title}
        </h5>
        <p className="card-text" style={{ color: "#222" }}>
          {item.desc1}
        </p>
        <span className="category">
          <div>
            {item.type}
          </div>
        </span>
      </div>
    </Link>
  );
  // <div className="card h-100 text-center shadow">
  //   <img src={item.img} className="card-img-top" height="250px" alt="..." />
  //   <div className="card-body">
  //     <h5 className="card-title" style={{ color: "#222" }}>
  //       {item.title}
  //     </h5>

  //   </div>
  // </div>
};

export default WebsiteList;
