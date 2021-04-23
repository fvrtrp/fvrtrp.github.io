import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const appsList = [
  {title: 'Sesh', description: 'New tab extension for Google Chrome', link: 'https://fvrtrp.com/sesh'},
  {title: 'Player of words', description: 'React app to practice English and typing efficiency', link: 'https://fvrtrp.com/player-of-words'},
];

const AppsPage = (props) => {

  return (
    <Layout
    >
      <SEO
        // title={data.site.siteMetadata.title}
        // description={data.site.siteMetadata.description}
        // ogImage={data.site.siteMetadata.image}
      />
      {appsList.map((item, index) => {
        return (
          <div
            key={index}
            className="appItem"
          >
            <div className="appTitle">
              <a href={item.link} target="_blank">{item.title}</a>
            </div>
            <div className="appDescription">{item.description}</div>
          </div>
        )
      })}
    </Layout>
  )
}

export default AppsPage