import React from "react";
import { Link } from "react-router-dom";

import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import PlayButton from "../../../Buttons/PlayButton";

import styles from "./Card.module.css";
const { wrapper, link, playBtn } = styles;

const Card = ({ image, title }) => {
  
  return (
    <div className={wrapper}>
      <Link to={"/greetings"} className={link}></Link>
      <CardImage image={image} />
      <CardTitle titleText={title} />
      <PlayButton btnClass={playBtn} />
    </div>
  );
};

export default Card;
