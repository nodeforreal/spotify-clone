import React from "react";

import Card from "./Card";

import styles from "./ShelfCards.module.css";
const { wrapper } = styles;

const image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const ShelfCards = ({ cardList }) => {
  return (
    <div className={wrapper}>
      {cardList.slice(0,6).map((item,index) => {
        return <Card key={index} image={image} title={'Mix - '+index}/>;
      })}
    </div>
  );
};

export default ShelfCards;
