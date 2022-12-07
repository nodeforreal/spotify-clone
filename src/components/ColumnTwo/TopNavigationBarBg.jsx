import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { globalSelectors } from "../../styles/GlobalSelectors";
import styles from "./TopNavigationBarBg.module.css";

const TopNavigationBarBg = () => {
  const [state, setState] = useState({ opacity: 0 });
  const location = useLocation();

  useLayoutEffect(() => {
    const thumb = document.querySelector(
      "." + globalSelectors.mainPageScrollWrapper + "--thumb"
    );
    let isPlaylist = /\/playlist\//.test(location.pathname);
    let isAlbum = /\/album\//.test(location.pathname);
    let isArtist = /\/artist\//.test(location.pathname);
    let isUser = /\/user\//.test(location.pathname);
    let isEpisodes = /\/episodes/.test(location.pathname);
    
    const isSubPage = isPlaylist || isAlbum || isArtist || isUser || isEpisodes;

    let observer = new MutationObserver(() => {
      if (isSubPage) {
        setState({ opacity: thumb.offsetTop / 130 });
      } else {
        setState({ opacity: thumb.offsetTop / 32 });
      }
    });
    observer.observe(thumb, { attributes: true });

    return ()=>{
      observer.disconnect()
    }
  }, [location]);

  return (
    <div className={styles.wrapper} style={{ opacity: state.opacity }}></div>
  );
};

export default TopNavigationBarBg;
