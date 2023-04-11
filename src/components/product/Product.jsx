import "./product.css";
import { Link } from "react-router-dom";
import arrow from "../../img/Arrow-right.svg";

const Product = ({ item }) => {
  return (
    <Link className="project-details text-decoration-none">
      <div className="card h-100 shadow p-2">
        <img
          src={item.img}
          className="dash-img card-img-top p-img"
          height="250px"
          style={{ objectFit: "contain", borderRadius: "10px" }}
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
      </div>
    </Link>
  );
};

export default Product;
