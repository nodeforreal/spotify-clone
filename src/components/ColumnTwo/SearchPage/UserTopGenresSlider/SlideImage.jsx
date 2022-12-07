import React from "react";

import styles from "./SlideImage.module.css";
const { wrapper } = styles;

const SlideImage = ({ image }) => {
  return (
    <div className={wrapper}>
      <img src={image} alt="" loading="lazy" />
    </div>
  );
};

export default SlideImage;
