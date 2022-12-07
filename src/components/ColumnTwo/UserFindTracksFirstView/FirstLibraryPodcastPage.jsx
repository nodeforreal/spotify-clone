import React from "react";

import FindTracksTemplate from "../FindTracksTemplate/FindTracksTemplate";

import CardsShelf from "../CardsShelf/CardsShelf";

import { SIPodcasts } from "../../../assets/SpotifyIcons";

import styles from "./FirstLibraryPodcastPage.module.css";

const { wrapper, shelf } = styles;

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const FirstLibraryPodcastPage = () => {
  return (
    <div className={wrapper}>
      <FindTracksTemplate
        svg={<SIPodcasts />}
        title={"Follow your first podcast"}
        subPara={"Follow podcasts you like by tapping the follow button."}
        path={"/search"}
        labelText={"Find podcasts"}
      />
      <CardsShelf
        titleOnly={false}
        titleText="Title Check"
        shelfPath={"/genre/section"}
        seeMoreText="see more"
      />
    </div>
  );
};

export default FirstLibraryPodcastPage;
