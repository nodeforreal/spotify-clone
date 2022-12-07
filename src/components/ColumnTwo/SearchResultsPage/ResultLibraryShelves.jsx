import React from "react";

import CardsShelf from "../CardsShelf/CardsShelf";
import styles from "./ResultLibraryShelves.module.css";

const ResultLibraryShelves = () => {
  return (
    <div className={styles.wrapper}>
      <CardsShelf titleOnly={false} titleText="Title Check" wrapperClass={styles.cardsShelf}/>
      <CardsShelf titleOnly={false} titleText="Title Check" wrapperClass={styles.cardsShelf}/>
      <CardsShelf titleOnly={false} titleText="Title Check" wrapperClass={styles.cardsShelf}/>
      <CardsShelf titleOnly={false} titleText="Title Check" wrapperClass={styles.cardsShelf}/>
      <CardsShelf titleOnly={false} titleText="Title Check" wrapperClass={styles.cardsShelf}/>
      <CardsShelf titleOnly={false} titleText="Title Check" wrapperClass={styles.cardsShelf}/>
      <CardsShelf titleOnly={false} titleText="Title Check" wrapperClass={styles.cardsShelf}/>
      <CardsShelf titleOnly={false} titleText="Title Check" wrapperClass={styles.cardsShelf}/>
      
    </div>
  );
};

export default ResultLibraryShelves;
