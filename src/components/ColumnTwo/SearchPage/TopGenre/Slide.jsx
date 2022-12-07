import React from "react";
import { Link } from "react-router-dom";

import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";

import styles from "./Slide.module.css";
const { wrapper, link } = styles;

const Slide = ({ image, title }) => {
  
  return (
    <div className={wrapper}>
      <Link className={link} to="/genre/728726827192"></Link>
      <SlideTitle title={title} />
      <SlideImage image={image} />
    </div>
  );
};

export default React.memo(Slide);
