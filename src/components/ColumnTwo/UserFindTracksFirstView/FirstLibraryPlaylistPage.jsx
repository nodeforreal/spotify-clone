import React from "react";

import FindTracksTemplate from "../FindTracksTemplate/FindTracksTemplate";

import { SIMusic } from "../../../assets/SpotifyIcons";

import styles from "./FirstLibraryPlaylistPage.module.css";

const FirstLibraryPlaylistPage = () => {
  return (
    <div className={styles.wrapper}>
      <FindTracksTemplate
        svg={<SIMusic />}
        title={"Create your first playlist"}
        subPara={"It's easy, we'll help you."}
        path={"/playlist/3qHDgXwr4gXabO7EsdDsKc"}
        labelText={"Create playlist"}
      />
      
    </div>
  );
};

export default FirstLibraryPlaylistPage;
