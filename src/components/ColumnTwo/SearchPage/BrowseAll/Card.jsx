import React from "react";
import { Link } from "react-router-dom";

import CardTitle from "./CardTitle";
import CardImage from "./CardImage";

import styles from "./Card.module.css";
const { wrapper , link} = styles;

const Card = ({ title, image }) => {
  return (
    <div className={wrapper}>
      <Link className={link} to="/genre/browse-all"></Link>
      <CardTitle title={title} />
      <CardImage image={image} />
    </div>
  );
};

export default Card;
