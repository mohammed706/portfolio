import React from "react";
import { useParams } from "react-router-dom";

import { websites } from "./../../websites";

const Websitedetails = () => {
  const { id } = useParams();
  const proDetails = websites.filter(x => x.id == id);
  const product = proDetails[0];
  console.log(product);
  return (
    <div className="row">
      <div className="col-md-6 p-5">
        <img
          style={{ borderRadius: "20px" }}
          src={product.img}
          alt={product.title}
          height="400px"
          width="400px"
        />
      </div>
      <div className="col-md-6 p-5">
        <h1 className="display-5">
          {product.title}
        </h1>

        <p className="lead">
          {product.desc}
        </p>
        <a
          className="btn  px-4 py-2"
          style={{ backgroundColor: "#218db8", color: "white" }}
          href={product.githublink}
          target="_blank"
        >
          github
        </a>
        <a
          className="btn  ms-2 px-3 py-2"
          style={{ backgroundColor: "#218db8", color: "white" }}
          href={product.online}
          target="_blank"
        >
          online
        </a>
      </div>
    </div>
  );
};

export default Websitedetails;
