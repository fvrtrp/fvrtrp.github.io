import { Link } from "gatsby";
import React from "react";

const navItems = [
  {title: 'home', link: "/", description: "go back home"},
  {title: 'apps', link: "/sesh", description: "appsu"},
  {title: 'blog', link: "/blog", description: "what's a blog"},
  {title: 'about', link: "/about", description: "what's s fever trip"},
]

const onNavMouseOver = (id) => {
  onNavMouseOut();
  const targetNav = document.querySelector(`#nav-${id}`);
  if(targetNav)  targetNav.classList.add('show');
  const targetItem = document.querySelector(`#linkItem-${id}`);
  if(targetItem)  targetItem.classList.add('expanded');
}

const onNavMouseOut = () => {
  const navItems = document.querySelectorAll('.linkDescription');
  navItems.forEach(item => {
    item.classList.remove("show");
  });
  const linkItems = document.querySelectorAll('.linkItem');
  linkItems.forEach(item => {
    item.classList.remove("expanded");
  });
}

const Header = (props) => {
  const { siteTitle } = props;
  return (
    <header
      className="nav active"
      id="nav"
    >
      {
        navItems.map((item, index) => (
          <div className="linkItem" id={`linkItem-${item.title}`} key={index}>
            <div className="linkDescription" id={`nav-${item.title}`} >{item.description}</div>
            <Link
              to={item.link}
              className="linkTitle"
              onMouseOver={()=>onNavMouseOver(item.title)}
              onMouseOut={onNavMouseOut}
            >
              {item.title}
            </Link>
          </div>
        ))
      }
    </header>
  )
  }

export default Header
