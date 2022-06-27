import "./product.css";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div class="card text-center shadow">
      <img src={item.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title" style={{ color: "#222" }}>
          {item.title}
        </h5>
        <p class="card-text">
          {item.desc}
        </p>
        <Link
          to={`/project/${item.id}`}
          class="btn "
          style={{ backgroundColor: "#218db8", color: "#fff" }}
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
