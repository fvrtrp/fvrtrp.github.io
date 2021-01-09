import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import '../styles/index.scss';

const IndexPage = () => {
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    if(!init) {
      setTimeout(() => changeBackground(2), 100);
      setTimeout(openOverlay, 1000);
      setInit(true);
    }
    return () => {
      clearInterval(changeBackground);
      clearTimeout(openOverlay);
    };
  }, [init]);

  function changeBackground(num) {
    const img = document.querySelector("#bgImage");
    img.src = require(`../images/${num}.svg`);
    setTimeout(() => changeBackground(num === 11 ? 1 : num+1), 100);
}

function openOverlay() {
    document.getElementById('container').classList.add("blur");
    document.getElementById('overlay').classList.add("active");
    document.getElementById('nav').classList.add("active");
}

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container" id="container">
          <img src={require(`../images/${1}.svg`)} id="bgImage" alt="logo" />
      </div>
      <div id="overlay"></div>
    </Layout>
  );
}

export default IndexPage
