import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/sesh.scss';

import seshLogo from '../images/sesh/sesh-new.svg';
import screen1 from '../images/sesh/screen1.png';
import screen2 from '../images/sesh/screen2.png';
import screen3 from '../images/sesh/screen3.png';
import screen4 from '../images/sesh/screen4.png';
import screen5 from '../images/sesh/screen5.png';

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
              Customizable - choose to show date & time, nihilist quotes, custom message, and combine with the perfect themes.
              </div>
            </div>
            <div className="carouselItem">
              <img className="carouselImage" src={screen3} alt="screenshot" />
              <div className="carouselItemDescription">
                Intuitive bookmarks browser with pin, search, and other useful functions.
              </div>
            </div>
            <div className="carouselItem">
              <img className="carouselImage" src={screen4} alt="screenshot" />
              <div className="carouselItemDescription">
              Built entirely with vanilla js/css. Only ~50kb. Does not slow up your browser.
              </div>
            </div>
            <div className="carouselItem">
              <img className="carouselImage" src={screen5} alt="screenshot" />
              <div className="carouselItemDescription">
              Useful, for when you access select bookmarks often.
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