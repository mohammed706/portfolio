import "./productList.css";
import Product from "../product/Product";
import { project } from "../../data";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const ProductList = () => {
  const optionCategorySlider = {
    dots: false,
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    responsiveClass: true,
    navText: [
      '<i className="left-arrow-client" aria-hidden="true"></i>',
      '<i className="right-arrow-client" aria-hidden="true"></i>'
    ],
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 2
      },

      1024: {
        items: 3
      },

      1366: {
        items: 3
      }
    }
  };
  return (
    <div className="pl" id="projects">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
      </div>

      <div className="row mt-5 mb-3 text-center">
        <h5>Dashboards</h5>
      </div>
      <div className="row mb-5">
        {project.map(item => <Product item={item} />)}
      </div>
    </div>
  );
};

export default ProductList;
