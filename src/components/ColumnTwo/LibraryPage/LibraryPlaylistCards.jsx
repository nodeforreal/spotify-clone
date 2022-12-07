import React from "react";

import UserPlaylistCard from "../Card/UserPlaylistCard";
import LikedEpisodesCard from "../Card/LikedEpisodesCard";
import LikedSongsCard from "../Card/LikedSongsCard";

import styles from "./LibraryPlaylistCards.module.css";
const { wrapper } = styles;

const data = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30,
];

const LibraryPlaylistCards = ({ cardList }) => {
  return (
    <div className={wrapper}>
      {data.map((item, index) => {
        if (index === 0) {
          return (
            <LikedSongsCard
              cardStyle={{
                background: `radial-gradient(
              238.6% 238.6% at 4.87% -131.25%,
              #460cf4 66.99%,
              #8c8ae6 100%
            )`,
              }}
              path={"/collection/tracks"}
              titleText={"Liked songs"}
              likeInfoText={`${232} liked songs`}
              key={index}
              likedCount={12}
              artistList={data}
            />
          );
        }
        if (index === 1) {
          return <LikedEpisodesCard key={index} />;
        }
        return <UserPlaylistCard key={index} />;
      })}
    </div>
  );
};

export default LibraryPlaylistCards;
