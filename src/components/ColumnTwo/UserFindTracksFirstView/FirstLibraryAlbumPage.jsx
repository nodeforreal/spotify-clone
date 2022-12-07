import React from "react";

import FindTracksTemplate from "../FindTracksTemplate/FindTracksTemplate";

import { SIAlbum } from "../../../assets/SpotifyIcons";

import styles from "./FirstLibraryAlbumPage.module.css";

const { wrapper } = styles;

const FirstLibraryAlbumPage = () => {
  return (
    <div className={wrapper}>
      <FindTracksTemplate
        svg={<SIAlbum />}
        title={"Follow your first album"}
        subPara={"Follow albums you like by tapping the follow button."}
        path={"/search"}
        labelText={"Find albums"}
      />
    </div>
  );
};

export default FirstLibraryAlbumPage;
