import React from "react";
import "./website.css";
import WebsiteList from "../websitesList/WebsiteList";
import { websites } from "../../websites";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Website = () => {
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
    <div>
      <div className="pl" id="projects">
        <div className="row mt-5 mb-3 text-center">
          <h5>Websites</h5>
        </div>
        <OwlCarousel className="top-slider owl-theme" {...optionCategorySlider}>
          {websites.map(item => <WebsiteList item={item} />)}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Website;
