import React from "react";

import styles from "./CardImage.module.css";
const { wrapper } = styles;

const CardImage = ({ image }) => {
  return (
    <div className={wrapper}>
      <img src={image} alt="" />
    </div>
  );
};

export default CardImage;
