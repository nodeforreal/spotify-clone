import React from "react";

import SubPage from "../SubPages/SubPage";
import YourEpisodesPageFirstView from "../UserFindTracksFirstView/YourEpisodesPageFirstView";
import EpisodePlaylist from "../EpisodePlaylist/EpisodePlaylist";
import PageEndLine from "../ColumnTwo/PageEndLine";

import { SIEpisode } from "../../../assets/SpotifyIcons";

import styles from "./YourEpisodesPage.module.css";

const headImage =
  "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png";

const YourEpisodesPage = () => {
  return (
    <div className={styles.wrapper}>
      <SubPage
        headWrapperClass={styles.headWrapper}
        isHeadImageUploadable={false}
        headSvg={<SIEpisode />}
        headImageWrapperClass={styles.headImageWrapper}
        coverTypeText={"playlist"}
        titleText={"Your Episodes"}
        userNameText={"kaliyamoorthy"}
        countLabelText={"episodes"}
        headBgColor="#056952"
        showPlayBtn={true}
      >
        <EpisodePlaylist onlyEpisodeTitle={false} />
      </SubPage>
      <PageEndLine />
    </div>
  );
};

export default YourEpisodesPage;
