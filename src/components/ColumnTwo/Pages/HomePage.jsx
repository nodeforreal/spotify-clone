import React from "react";

import GreetingsShelfContainer from "../HomePage/GreetingsShelfContainer";
import CardsShelf from "../CardsShelf/CardsShelf";
import PageEndLine from "../ColumnTwo/PageEndLine";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={styles.wrapper}>
      <GreetingsShelfContainer />
      <CardsShelf
        titleOnly={false}
        titleText={"Title Check"}
        shelfPath={"genre/section"}
        seeMoreText={"see more"}
      />
      <PageEndLine />
    </section>
  );
};

export default HomePage;
