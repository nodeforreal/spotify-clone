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
              "https://images.manning.com/book/2/7dbf42d-9edc-4613-bc57-111b429cc312/Wexler-NodeJS_hires.png"
            }
            title={"title-" + index}
          />
        );
      })}
    </div>
  );
};

export default Cards;
