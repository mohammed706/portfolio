import React from "react";
import { useParams } from "react-router-dom";
import { project } from "../../data";
const Projectdetails = () => {
  const { id } = useParams();
  const proDetails = project.filter(x => x.id == id);
  const product = proDetails[0];
  console.log(product);
  return (
    <div>
      <div className="container my-5 py-3">
        <div className="row mb-5">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img
              src={product.img1}
              alt={product.title}
              height="200px"
              width="400px"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h5
              className="my-4 text-center"
              style={{
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                fontWeight: "400"
              }}
            >
              {product.desc1}
            </h5>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h5
              className=" my-4 text-center"
              style={{
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                fontWeight: "400"
              }}
            >
              {product.desc2}
            </h5>
          </div>
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img
              src={product.img2}
              alt={product.title}
              height="200px"
              width="400px"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img
              src={product.img3}
              alt={product.title}
              height="200px"
              width="400px"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h5
              className=" my-4 text-center"
              style={{
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                fontWeight: "400"
              }}
            >
              {product.desc3}
            </h5>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h5
              className=" my-4 text-center"
              style={{
                fontFamily: "Poppins",
                fontSize: "1.2rem",
                fontWeight: "400"
              }}
            >
              {product.desc4}
            </h5>
          </div>
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img
              src={product.img4}
              alt={product.title}
              height="200px"
              width="400px"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectdetails;
