import React from "react";

import EpisodeShowCard from '../Card/EpisodeShowCard'
import LikedSongsCard from "../Card/LikedSongsCard";

import styles from "./LibraryPodcastsCards.module.css";
const data = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30,
];

const LibraryPodcastsCards = ({ cardList }) => {
  return (
    <div className={styles.wrapper}>
      {data.map((item, index) => {
        if (index === 0) {
          return <LikedSongsCard
          cardStyle={{
            background: `radial-gradient(238.6% 238.6% at 4.87% -131.25%, #00644E 66.99%, #268469 100%)`}}
          path={'/podcasts'}
          titleText={'Your Episodes'}
          likeInfoText={`${3} episodes`}
          key={index} likedCount={12} artistList={data} />;
        }
        return < EpisodeShowCard key={index} descText={'ddgfgf'}/>;
      })}
    </div>
  );
};

export default LibraryPodcastsCards;
