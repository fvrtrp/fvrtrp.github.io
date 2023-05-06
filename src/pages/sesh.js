import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/sesh.scss';

import seshLogo from '../images/sesh/sesh-new.svg';
import screen1 from '../images/sesh/1.png';
import screen2 from '../images/sesh/2.png';
import screen3 from '../images/sesh/3.png';
import screen4 from '../images/sesh/4.png';
import screen5 from '../images/sesh/5.png';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

const Sesh = () => {
  if(typeof window === 'undefined')
    return <></>
  return (
    <Layout>
      <SEO title="Sesh - New Tab extension for Google Chrome" />
      <div className="sesh">
        <div className="seshHeader">
          <div className="logoContainer">
            <img className="logo" alt="logo" src={seshLogo} />
            <span className="logoText">sesh</span>
          </div>
          <div className="linksContainer">
            <a href="https://chrome.google.com/webstore/detail/sesh-beautiful-new-tab/jkgkocdjfgbigcifeofbbpjnghioplle" className="link">get it on chrome store</a>
            <a href="https://github.com/fvrtrp/sesh" className="link">visit github page</a>
          </div>
        </div>
        <div className="carouselContainer">
          <Slider {...sliderSettings}>
            <div className="carouselItem">
              <img className="carouselImage" src={screen1} alt="screenshot" />
              <div className="carouselItemDescription">
                Beautiful New Tab pages for Google Chrome
              </div>
            </div>
            <div className="carouselItem">
              <img className="carouselImage" src={screen2} alt="screenshot" />
              <div className="carouselItemDescription">
              Movie-posters mode has some neat transitions to fixate over some iconic posters.
              </div>
            </div>
            <div className="carouselItem">
              <img className="carouselImage" src={screen3} alt="screenshot" />
              <div className="carouselItemDescription">
                Try the geometry theme to see some blissful floating boxes.
              </div>
            </div>
            <div className="carouselItem">
              <img className="carouselImage" src={screen4} alt="screenshot" />
              <div className="carouselItemDescription">
                The Google-Earth theme shows amazing landscapes from all around the globe.
              </div>
            </div>
            <div className="carouselItem">
              <img className="carouselImage" src={screen5} alt="screenshot" />
              <div className="carouselItemDescription">
              Customizable - choose from several themes to fit your mood & style. Only ~75kb. Does not slow down your browser.
              </div>
            </div>
          </Slider>
        </div>
        <div className="productDescription"></div>
      </div>
    </Layout>
  );
}

export default Sesh