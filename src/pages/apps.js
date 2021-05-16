import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/apps.scss';
import VisitIcon from '../images/visit.svg';
import appsList from '../app-list';


const AppsPage = (props) => {
  const [ searchTerm ,setSearchTerm ] = useState('');
  const [ filteredItems, setFilteredItems ] = useState([]);
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSearch = () => {
    if(searchTerm.trim() === '') {
      setFilteredItems(appsList);
      return;
    }
    const filteredItems = appsList.filter(i => (
      i.title.toLowerCase().includes(searchTerm.toLowerCase())
      || i.description.toLowerCase().includes(searchTerm.toLowerCase())
      || i.link.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    setFilteredItems(filteredItems);
  }

  const blurNonFocused = (id) => {
    const items = document.querySelectorAll(".appItem");
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
    const items = document.querySelectorAll(".appItem");
    items.forEach(i => {
      i.classList.remove("blur");
    });
  }

  return (
    <Layout type="clean"
    >
      <SEO
        title={"Apps"}
        description={"see what we've been brewing during the night"}
        // ogImage={data.site.siteMetadata.image}
      />
      <div className="parent">
        <div className="pageHeader">
          <h1 className="pageTitle">Apps</h1>
          <div className="searchBar">
            <input
              value={searchTerm}
              placeholder="SEARCH FOR TITLE, DESCRIPTION ETC"
              onChange={handleChange}
              autoFocus
            />
          </div>
        </div>
        {filteredItems.map((item, index) => {
          return (
            <div
              key={index}
              className="appItem"
              id={`appItem-${index}`}
              onMouseOver={()=>blurNonFocused(`appItem-${index}`)}
              onMouseOut={unBlurAll}
            >
              <div className="appTitle">
                <h3>
                  <a href={item.link} target="_blank">{item.title}</a>
                </h3>
                <div className="underlineSmall"></div>
                {
                  item.link &&
                  <a href={item.link} target="_blank">
                    <img src={VisitIcon} alt="Visit link" title="Visit link" />
                  </a>
                }
              </div>
              <h5 className="appDescription">{item.description}</h5>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default AppsPage