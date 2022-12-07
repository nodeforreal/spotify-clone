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
              "https://i.pinimg.com/564x/c4/ec/be/c4ecbe7c4c030379e886e5552a7f4ba9.jpg"
            }
            title={"title-" + index}
          />
        );
      })}
    </div>
  );
};

export default Cards;
