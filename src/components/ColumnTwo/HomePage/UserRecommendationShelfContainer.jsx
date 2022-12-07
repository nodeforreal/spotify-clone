import React from "react";

import ShelfName from '../CardsShelf/ShelfName';
import CardsShelf from "../CardsShelf/CardsShelf";

import styles from './UserRecommendationShelfContainer.module.css';

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const UserRecommendationShelfContainer = () => {
  return (
    <section className={styles.wrapper}>
      <ShelfName titleOnly={false} path={'/genre/section'} seeMoreText='see all' titleText='Title check' />
      <CardsShelf cardList={data}/>
    </section>
  );
};

export default UserRecommendationShelfContainer;
