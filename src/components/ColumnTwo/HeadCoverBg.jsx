import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./HeadCoverBg.module.css";

let img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const HeadCoverBg = () => {
  const location = useLocation();

  let isPlaylist = /\/playlist\//.test(location.pathname);
  let isAlbum = /\/album\//.test(location.pathname);
  let isArtist = /\/artist\//.test(location.pathname);
  let isUser = /\/user\//.test(location.pathname);
  let isEpisodes = /\/episodes/.test(location.pathname);

  const isSubPage = isPlaylist || isAlbum || isArtist || isUser || isEpisodes;

  if (null) {
    return (
      <div className={styles.wrapper}>
        <img src={img} alt="" />
      </div>
    );
  }

  
  return <div></div>;
};

export default HeadCoverBg;
