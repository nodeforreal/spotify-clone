import React from "react";

import SubPage from "../SubPages/SubPage";
// import LikedPageUserFirstView from "../UserFindTracksFirstView/LikedPageUserFirstView";
import PlaylistPagePlaylist from "../PagePlaylist/PlaylistPagePlaylist";
import PageEndLine from "../ColumnTwo/PageEndLine";

import styles from "./LikedSongsPage.module.css";

const headImage =
  "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png";
const LikedSongsPage = () => {
  return (
    <div className={styles.wrapper}>
      <SubPage
        headWrapperClass={styles.headWrapper}
        isHeadImageUploadable={false}
        headImage={headImage}
        coverTypeText={"playlist"}
        titleText={"Liked Songs"}
        userNameText={"kaliyamoorthy"}
        countLabelText={"songs"}
        headBgColor="#5038a0"
        showPlayBtn={true}
      >
        <PlaylistPagePlaylist rootMarginTop={"-120px"} stickyTop="64px" />
        {/* <LikedPageUserFirstView /> */}
      </SubPage>
      <PageEndLine />
    </div>
  );
};

export default LikedSongsPage;
