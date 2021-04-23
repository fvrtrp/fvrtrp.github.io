import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFoundImage from '../images/404.svg';
import '../styles/404.scss';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

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
