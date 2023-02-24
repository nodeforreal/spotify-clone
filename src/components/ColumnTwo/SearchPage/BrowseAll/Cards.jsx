import React from "react";

import Card from "./Card";

import styles from "./Cards.module.css";
const { wrapper } = styles;

const Cards = ({ cardList }) => {
  

  return (
    <div className={wrapper}>
      {cardList.map((item, index) => {
        return (
          <Card
            key={index}
            image={
              "https://www.imgonline.com.ua/examples/random-pixels-big.png"
            }
            title={"title-" + index}
          />
        );
      })}
    </div>
  );
};

export default Cards;
