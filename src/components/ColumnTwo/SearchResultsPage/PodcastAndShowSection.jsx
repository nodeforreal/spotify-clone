import React from "react";
import { useParams } from "react-router-dom";

import CardsShelf from "../CardsShelf/CardsShelf";
import ShelfName from "../CardsShelf/ShelfName";

import EpisodePlaylist from "../EpisodePlaylist/EpisodePlaylist";

import styles from "./PodcastAndShowSection.module.css";

const PodcastAndShowSection = () => {
  const { searchParam } = useParams();
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionTop}>
        <CardsShelf
          titleOnly={false}
          titleText="Title Check"
          shelfPath={`/search/${searchParam}/podcasts`}
          seeMoreText={"see more"}
        />
      </div>
      <div className={styles.sectionBottom}>
        <ShelfName
          wrapperClass={styles.episodeSectionTitle}
          titleOnly={false}
          titleText="Episode"
          path={`/search/${searchParam}/podcasts`}
          seeMoreText={"see more"}
        />
        <EpisodePlaylist />
      </div>
    </div>
  );
};

export default PodcastAndShowSection;
