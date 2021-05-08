import { Link } from "gatsby";
import { navigate } from "@reach/router" ;
import React, {useEffect} from "react";
import '../styles/header.scss';

const navItems = [
  {title: 'home', link: "/", description: <div>go back home</div>},
  {title: 'apps', link: "/apps", description: <div>SEE WHAT<br/>WE'VE BEEN<br/>BREWING<br/>DURING<br/>THE<br/>NIGHT</div>},
  {title: 'blog', link: "/blog", description: <div>TAKE A LOOK<br/>AT WHAT<br/>DRIVES US,<br/>AND HOW WE<br/>DO<br/>WHAT WE DO.</div>},
  //{title: 'about', link: "/about", description: <div>WHAT<br/>IS<br/>FEVER TRIP?</div>},
];

let enableHover = false;

const onNavMouseOver = (id) => {
  if(!enableHover)
    return;
  onNavMouseOut();
  const navParent = document.querySelector(`#nav`);
  if(navParent)  navParent.classList.add('expanded');
  const targetNav = document.querySelector(`#nav-${id}`);
  if(targetNav)  targetNav.classList.add('show');
  const targetItem = document.querySelector(`#linkItem-${id}`);
  if(targetItem)  targetItem.classList.add('expanded');
}

const onNavMouseOut = () => {
  const navParent = document.querySelector(`#nav`);
  if(navParent)  navParent.classList.remove('expanded');
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
  if(onCurrentPage(item.link)) {
    return <div>
      You are<br/>already<br/>here.
    </div>
  }
  else {
    return item.description;
  }
}

const onCurrentPage = (link) => {
  return window.location.pathname === link;
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
              className={`linkTitle ${onCurrentPage(item.link) ? 'active' : ''}`}
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
