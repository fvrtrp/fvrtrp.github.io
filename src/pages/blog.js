import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {

  let [activeCategory, setActiveCategory] = useState(null);
  let [cardInfo, setCardInfo] = useState({
    background: null,
    title: '',
  });

  const updateActiveCategory = (category) => {
    const el = document.querySelector('#opacityContainer');
    el.classList.add('hidden');
    setTimeout(()=> {
      setActiveCategory(category);
      el.classList.remove('hidden');
    }, 200
    );
  }
  
  const siteTitle = data.site.siteMetadata.title;
  let posts = data.allMarkdownRemark.edges.filter(({node}) => {
    if(activeCategory === null || activeCategory === 'home')
      return true;
    return node.frontmatter.category === activeCategory
  });

  return (
    <Layout
      location={location}
      title={siteTitle}
      backgroundImage={cardInfo ? cardInfo.background : null}
      activeCategory={activeCategory}
      updateActiveCategory={updateActiveCategory}
    >
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        ogImage={data.site.siteMetadata.image}
      />
      {
        !posts.length &&
        <div className="noContent">
          Square zero.<br/>Nothing yet.
        </div>
      }
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            key={node.fields.slug}
            className="homeCard"
          >
            <div className="content" style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                width: '500px',
                maxWidth: '100%',
              }}>
              <header>
                <h3><Link to={node.fields.slug}>
                  {title}
                </Link></h3>
              </header>
              <section className={`subtitle ${cardInfo.title === node.frontmatter.title ? 'showSubtitle' : ''}`}>
                <Link to={node.fields.slug}>
                  {node.frontmatter.subtitle || node.excerpt}
                </Link>
              </section>
            </div>
            <div className="cardSeparator" style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: '50px',
              }}></div>
            <div className={`date homeDate ${cardInfo.title === node.frontmatter.title ? 'highlightDate' : ''}`}>
              {node.frontmatter.date}
            </div>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        image
        social {
          email
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 40)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMDD, YYYY")
            title
            subtitle
            background
            category
          }
        }
      }
    }
  }
`
