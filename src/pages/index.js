import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import '../styles/index.scss';

export default class IndexPage extends React.Component {
  state = {
    index: 1
  }
  componentDidMount() {
    this.preloadImages(1);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  preloadImages = (index) => {
    if(index < 18) {
      const img = document.querySelector("#bgImage");
      if(img)
        img.src = require(`../images/${index}.svg`);
      this.preloadImages(index+1);
    }
    else {
      const container = document.querySelector("#container");
      container && container.classList.add('show');
      let intervalId = setInterval(this.changeBackground, 100);
      setTimeout(this.openOverlay, 1000);
      this.setState({ intervalId });
      return;
    }
  }

  
changeBackground = () => {
  const img = document.querySelector("#bgImage");
  const { index } = this.state;
  if(img)
    img.src = require(`../images/${index}.svg`);
  this.setState({ index: index===18 ? 1 : index+1 });
}

openOverlay = () => {
  document.getElementById('container') && document.getElementById('container').classList.add("blur");
  document.getElementById('overlay') && document.getElementById('overlay').classList.add("active");
  document.getElementById('nav') && document.getElementById('nav').classList.add("active");
}
  
  render () {
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
}
