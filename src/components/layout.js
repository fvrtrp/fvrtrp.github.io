import React, { useEffect } from "react"
import { Link } from "gatsby"
import sqzBright from '../../content/assets/sqzBright.png'

import '../styles/styles.scss';

const Layout = (props) => {
  const { title, children, backgroundImage } = props;
  const categories = ['home', 'blog', 'poetry', 'fiction', 'reviews'];
  const header = (
    <h1><Link style={{ color:`inherit` }} to={`/`}>{title}</Link></h1>
  );
  
  const goHome = () => {
    if(props.type)
      window.location.href="/";
  }
  
  return (
    <>
    <div className="sidebarContainer">
      <div className="hamburger" onClick={goHome} title="Home">
        <img className="logo" src={sqzBright} alt="logo" />
      </div>
      {
        !props.type &&
        <div className="categories">
        {
          categories.map((item, index) => (
            <div
              key={index}
              className="category"
              onClick={()=>props.updateActiveCategory(item, props.type)}
            >
              <div className="text">{item}</div>
              <div className="overlay"></div>
            </div>
          ))
        }
        <Link to="/about"
          className="category"
        >About</Link>
      </div>
      }
    </div>
    <div
      id="opacityContainer"
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        padding: `30px 20px`,
        zIndex: 5,
        position: 'relative'
      }}
    >
      <header className="pageHeader" title="Silent Observations">{header}</header>
      <main>{children}</main>
      <footer>
      </footer>
    </div>
    </>
  )
}

export default Layout
