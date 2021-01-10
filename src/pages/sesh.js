import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import '../styles/index.scss';

import screen1 from '../images/sesh/screen1.png';
import screen2 from '../images/sesh/screen2.png';
import screen3 from '../images/sesh/screen3.png';
import screen4 from '../images/sesh/screen4.png';
import screen5 from '../images/sesh/screen5.png';
import screen6 from '../images/sesh/screen6.png';
import screen7 from '../images/sesh/screen7.png';

const Sesh = () => {
  // const [init, setInit] = useState(false);
  
  useEffect(() => {
    
    return () => {
      
    };
  });

  return (
    <Layout>
      <SEO title="Sesh - New Tab extension for Google Chrome" />
      <div className="carouselContainer">
        <Carousel
          plugins={['arrows', 'infinite', 'autoplay']}
        >
          <img className="carouselImage" src={screen1} alt="screenshot" />
          <img className="carouselImage" src={screen2} alt="screenshot" />
          <img className="carouselImage" src={screen3} alt="screenshot" />
          <img className="carouselImage" src={screen4} alt="screenshot" />
          <img className="carouselImage" src={screen5} alt="screenshot" />
          <img className="carouselImage" src={screen6} alt="screenshot" />
          <img className="carouselImage" src={screen7} alt="screenshot" />
        </Carousel>
      </div>
    </Layout>
  );
}

export default Sesh
