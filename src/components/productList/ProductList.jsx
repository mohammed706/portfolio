import "./productList.css";
import Product from "../product/Product";
import WebsiteList from "../product/WebsiteList";
import { project } from "../../data";
import { websites } from "../../websites";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const ProductList = () => {
  const optionCategorySlider = {
    dots: true,
    autoplay: false,
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
    nav: false,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 1
      },

      1024: {
        items: 2
      },

      1366: {
        items: 2
      }
    }
  };
  return (
    <div className="pl mt-5 pt-4" id="projects">
      <div className="container">
        <div className="pl-texts d-flex justify-content-center">
          <h2 className="pl-title">My Projects</h2>
        </div>
        <ul
          class="nav nav-tabs pt-3"
          id="myTab"
          role="tablist"
          style={{ border: "none" }}
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
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
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="dash"
            role="tabpanel"
            aria-labelledby="dash-tab"
          >
            <OwlCarousel
              className="owl-carousel owl-theme pt-4"
              {...optionCategorySlider}
            >
              {project.map(item => <Product item={item} />)}
            </OwlCarousel>
          </div>
          <div
            class="tab-pane fade"
            id="sites"
            role="tabpanel"
            aria-labelledby="sites-tab"
          >
            <OwlCarousel
              className="top-slider owl-theme pt-4"
              {...optionCategorySlider}
            >
              {websites.map(item => <WebsiteList item={item} />)}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
