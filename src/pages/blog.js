import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/blog.scss';

const BlogIndex = ({ data, location }) => {

  const [ searchTerm ,setSearchTerm ] = useState('');
  const [ filteredItems, setFilteredItems ] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const urlSearch = window.location.search;
    if(!loaded && urlSearch) {
      handleChange(urlSearch.split("=")[1]);
      setLoaded(true);
      return;
    }
    handleSearch();
    setLoaded(true);
  }, [searchTerm]);


  let posts = data.allMarkdownRemark.edges;

  const handleChange = (e) => {
    setSearchTerm(e.target ? e.target.value : e);
  }

  const handleSearch = () => {
    if(searchTerm.trim() === '') {
      setFilteredItems(posts);
      return;
    }
    let filteredItems = [];
    if(searchTerm.startsWith("#")) {
      filteredItems = posts.filter(i => (
        i.node.frontmatter.category.toLowerCase().includes(searchTerm.replace("#", "").toLowerCase())
      ))
    }
    else {
      filteredItems = posts.filter(i => (
        i.node.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
        || i.node.frontmatter.category.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    }
    setFilteredItems(filteredItems);
  }

  const blurNonFocused = (id) => {
    const items = document.querySelectorAll(".blogItem");
    items.forEach(i => {
      if(id === i.id) {
        i.classList.remove("blur");
      }
      else {
        i.classList.add("blur");
      }
    });
  }

  const unBlurAll = () => {
    const items = document.querySelectorAll(".blogItem");
    items.forEach(i => {
      i.classList.remove("blur");
    });
  }

  return (
    <Layout
      title={"Blog"}
      type="clean"
    >
      <SEO
        title={"Blog"}
        description={"take a look at what drives us, and how we do what we do"}
      />
      <div className="parent">
        <div className="pageHeader">
          <h1 className="pageTitle">Blog</h1>
          <div className="searchBar">
            <input
              value={searchTerm}
              placeholder="SEARCH FOR TITLE, CATEGORY ETC"
              onChange={handleChange}
              autoFocus
            />
          </div>
        </div>
      {filteredItems.map(({ node }, index) => {
        const title = node.frontmatter.title || node.fields.slug;
        const categories = node.frontmatter.category.split(",");
        return (
          <div
            key={index}
            className="blogItem"
            id={`blogItem-${index}`}
            onMouseOver={()=>blurNonFocused(`blogItem-${index}`)}
            onMouseOut={unBlurAll}
          >
            <div className="blogMeta">
              <div className={`blogDate`}>
                {node.frontmatter.date}
              </div>
              <div className="categories">
              {
                (categories.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="hashtag"
                      onClick={()=>handleChange(`#${item}`)}
                    >
                      #{item}
                    </span>
                  )
                }))
              }
              </div>
            </div>
            <h3 className="blogTitle"><Link to={node.fields.slug}>
              {title}
            </Link></h3>
          </div>
        )
      })}
      </div>
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
            category
          }
        }
      }
    }
  }
`
