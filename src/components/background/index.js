import React, { useState, useEffect } from "react";
import '../../styles/index.scss';
import Loader from '../Loader';

const IMAGES = new Array(18).fill(0).map((i,index)=>(index+1));
let index = 1;

export default function Background() {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = require(`./images/${image}.svg`)
        loadImg.onload = () => {
          resolve();
        }

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => {
        let intervalId = setInterval(changeBackground, 100);
        setTimeout(openOverlay, 1000);
        setIntervalId(intervalId);
        setImgsLoaded(true);
        const container = document.querySelector("#backgroundContainer");
        // console.log(`zzz finished loading images`);
        if(container) container.classList.add('show');
      })
      .catch(err => console.log("zzz Failed to load images", err))

      return(() => {
        clearInterval(intervalId);
      })
  }, []);

  const changeBackground = () => {
    const bgImages = document.querySelectorAll('.bgImage');
    for(let i=0; i<bgImages.length; i++) {
      const image = bgImages[i];
      const imageId = image.id;
      if(`bgImage-${index}` === imageId) {
        image.classList.add('show');
      }
      else {
        image.classList.remove('show');
      }
    }
    index = index===18 ? 1 : index+1;
  }

  const openOverlay = () => {
    const container = document.getElementById('backgroundContainer');
    if(container) container.classList.add("blur");
    const overlay = document.getElementById('backgroundOverlay');
    if(overlay) overlay.classList.add("active");
    const nav = document.getElementById('nav');
    if(nav) nav.classList.add("active");
  }

  if(!imgsLoaded) {
    return <Loader/>
  }
  
  return (
    <>
      <div className="backgroundContainer" id="backgroundContainer">
        {
          IMAGES.map((item, index) => {
            return (
              <img
                key={index}
                src={require(`./images/${item}.svg`)}
                id={`bgImage-${item}`}
                className="bgImage"
                alt="logo"
              />
            );
          })
        }
      </div>
      <div id="backgroundOverlay"></div>
      <div id="whitenoise"></div>
    </>
  );
}
