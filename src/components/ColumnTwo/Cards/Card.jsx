import React from "react";
import { NavLink } from "react-router-dom";

import CardImage from "./CardImage";
import Title from "./Title";
import DescLinks from "./DescLinks";


import styles from "./Card.module.css";

let img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4Ej3sddJTqtqN48tLwfcukxY-e70Aev4Dw&usqp=CAU";

const Card = ({ cardType,isPlaying }) => {
  console.log("card");
  return (
    <div className={`${styles.wrapper}`}>
      <NavLink to={"/artist/38782763172"} className={styles.navLink}></NavLink>
      <CardImage img={img} cardType='artist' / >
      <Title />
     {<DescLinks />}
    </div>
  );
};

export default React.memo(Card);
