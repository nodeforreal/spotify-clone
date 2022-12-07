import React from "react";

import styles from "./SlideImage.module.css";
const { wrapper } = styles;

const SlideImage = ({ image }) => {
  return (
    <div className={wrapper}>
      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU'} alt="" loading="lazy" />
    </div>
  );
};

export default SlideImage;
