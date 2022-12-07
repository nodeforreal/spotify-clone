import React from "react";
import CardsShelf from "../CardsShelf/CardsShelf";
import PageEndLine from "../ColumnTwo/PageEndLine";

import styles from "./GenrePage.module.css";
const GenrePage = () => {
  
  return (
    <section className={styles.wrapper}>
      <Title />
      <div className={styles.bodyWrapper}>
        <CardsShelf
          wrapperClass={styles.cardsShelf}
          titleDescText="lorem ipsum"
          seeMoreText="see more"
          titleText="Title Check"
          shelfPath="/genre/section/2323232"
        />
        <CardsShelf
          wrapperClass={styles.cardsShelf}
          seeMoreText="see more"
          titleText="Title Check"
          shelfPath="/genre/section/2323232"
        />
        <CardsShelf
          wrapperClass={styles.cardsShelf}
          seeMoreText="see more"
          titleText="Title Check"
          shelfPath="/genre/section/2323232"
        />
        <CardsShelf
          wrapperClass={styles.cardsShelf}
          seeMoreText="see more"
          titleText="Title Check"
          shelfPath="/genre/section/2323232"
        />
        <CardsShelf
          wrapperClass={styles.cardsShelf}
          seeMoreText="see more"
          titleText="Title Check"
          shelfPath="/genre/section/2323232"
        />
        <CardsShelf
          wrapperClass={styles.cardsShelf}
          seeMoreText="see more"
          titleText="Title Check"
          shelfPath="/genre/section/2323232"
        />
        <CardsShelf
          wrapperClass={styles.cardsShelf}
          seeMoreText="see more"
          titleText="Title Check"
          shelfPath="/genre/section/2323232"
        />
      </div>
    </section>
  );
};

const Title = () => {
  let isHaveCoverImage = null;
  let height1 =
    "calc(var(--topNavigationBar-height) + var(--sub-page-head-image-size) + 24px ) ";
  let height2 =
    "calc(var(--topNavigationBar-height) + var(--sub-page-head-image-size) + 24px - 100px) ";
  return (
    <div
      className={styles.headWrapper}
      style={{
        "--head-bg-color": "rgb(0,0,0)",
        height: isHaveCoverImage ? height1 : height2,
      }}
    >
      <h1 className={styles.headTitle}>{"Title"}</h1>
    </div>
  );
};

export default GenrePage;
