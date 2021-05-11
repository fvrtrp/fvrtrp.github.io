import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/profile.scss';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={"Suraj"} type="clean">
      <SEO title="Suraj" />
      <div className="profile">
        <div className="left">
          <h1>I am Suraj</h1>
          <h2>Front-end developer at Workongrid</h2>
          <h3>I primarily work with React, Gatsby, javascript, scss.</h3>
          <h4>
          <span className="highlight">Master's in computer science</span> from University of Florida<br/>
          <span className="highlight">UI-UX specialization</span> from California Institute of Arts 
          </h4>
        </div>
        <div className="right">
          <div className="profileItem">
            <a href="/apps" target="_blank" rel="noopener noreferrer">portfolio</a>
            <div className="progress"></div>
          </div>
          <div className="profileItem">
            <a href="https://github.com/surajk95" target="_blank" rel="noopener noreferrer">github</a>
            <div className="progress"></div>
          </div>
          <div className="profileItem">
            <a href="/blog" target="_blank" rel="noopener noreferrer">blog</a>
            <div className="progress"></div>
          </div>
          <div className="profileItem">
            <a href="https://www.linkedin.com/in/surajk95/" target="_blank" rel="noopener noreferrer">linkedin</a>
            <div className="progress"></div>
          </div>
        </div>
      </div>
      {/* <div id="whitenoise"></div> */}
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
