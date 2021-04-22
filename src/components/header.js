import { Link } from "gatsby";
import { navigate } from "@reach/router" ;
import React, {useEffect} from "react";

const navItems = [
  {title: 'home', link: "/", description: "go back home"},
  {title: 'apps', link: "/sesh", description: "appsu"},
  {title: 'blog', link: "/blog", description: "what's a blog"},
  {title: 'about', link: "/about", description: "what's a fever trip"},
]

let enableHover = false;

const onNavMouseOver = (id) => {
  if(!enableHover)
    return;
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

const linkClicked= (link) => {
  enableHover=false;
  navigate(link);
  onNavMouseOut();
}

const onMouseMove = () => {
  if(!enableHover) {
    enableHover = true;
  }
}

const getItemDescription = (item) => {
  if(window.location.pathname === item.link) {
    return "You are already here";
  }
  else {
    return item.description;
  }
}

const Header = (props) => {
  const { siteTitle } = props;

  useEffect(() => {
    enableHover = false;
  });

  return (
    <header
      className="nav active"
      id="nav"
      onMouseMove={onMouseMove}
    >
      {
        navItems.map((item, index) => (
          <div className="linkItem" id={`linkItem-${item.title}`} key={index}>
            <div className="linkDescription" id={`nav-${item.title}`} >
              {getItemDescription(item)}
            </div>
            <div
              className="linkTitle"
              onMouseOver={()=>onNavMouseOver(item.title)}
              onMouseOut={onNavMouseOut}
              onClick={()=>linkClicked(item.link)}
            >
              {item.title}
            </div>
          </div>
        ))
      }
    </header>
  )
  }

export default Header
