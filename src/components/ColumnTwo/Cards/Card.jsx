import React from "react";
import { NavLink } from "react-router-dom";

import CardImage from "./CardImage";
import Title from "./Title";
import DescLinks from "./DescLinks";


import styles from "./Card.module.css";

let img =
  "https://media.istockphoto.com/id/1140180560/photo/colored-powder-explosion-on-black-background.jpg?s=612x612&w=0&k=20&c=gH_tj4MVWr0226qcq_uJ4nxfLTKG-7T29rtUklT4Obk=";

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
