import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShareIcon from '../images/share.svg';
import BackIcon from '../images/back.svg';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;

  function copyToClipboard(){
    var textArea = document.createElement("textarea");
    textArea.value = window.location.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

    var tooltip = document.getElementById("tooltiptext");
    tooltip.innerHTML = "Link copied";
  }

  function outFunc() {
    var tooltip = document.getElementById("tooltiptext");
    tooltip.innerHTML = "Copy Link";
  }

  function goHome() {
    window.history.back();
  }

  return (
    <Layout
      title={post.frontmatter.title}
      type="clean"
    >
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        //ogImage={post.frontmatter.background}
      />
      <div className="article">
        <div className="articleTitle">
          <div className="backButton" onClick={goHome} title="Back">
            <img
              className="backIcon"
              src={BackIcon}
              alt="Back"
            />
          </div>
          <h1>{post.frontmatter.title}</h1>
        </div>
        <div className="articleMeta">
          <div className="articleDate">{post.frontmatter.date}</div>
          <div className="articleAuthor">by Suraj</div>
          <div className="tooltipcontainer">
            <img
              onClick={copyToClipboard}
              onMouseOut={outFunc}
              className="shareIcon"
              src={ShareIcon}
              alt="Share"
            />
            <span id="tooltiptext" className="tooltiptext">Copy Link</span>
          </div>
        </div>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer>
        </footer>
        <div className="articleMeta">
          
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        image
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMDD, YYYY")
        category
      }
    }
  }
`
