import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFoundImage from '../images/404.svg';
import '../styles/404.scss';
import appsList from '../app-list';

const NotFoundPage = ({ data, location }) => {
  const [ show404, set404] = useState(false);

  useEffect(() => {
    if(appsList.find(i=>i.link===location.pathname)) {
      navigate(`https://surajk95.github.io${location.pathname}`);
    }
    else {
      set404(true);
    }
  }, []);

  if(!show404) {
    return null;
  }

  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Page Not Found" />
      <div className="notFoundPage">
        <img src={NotFoundImage} alt="page not found" className="notFoundImage" />
        <h1 className="notFoundText">YOU WERE NEVER SUPPOSED TO BE HERE.</h1>
      </div>
      <div id="whitenoise"></div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
