import React from "react";

import styles from "./HeadImage.module.css";

const HeadImage = ({ image, headSvg, headImageWrapperClass, pageType }) => {
  const isShowPage = pageType === "show";
  const isArtistPage = pageType === "artist";
  const isUserPage = pageType === "user";
  return (
    <div
      className={`${styles.wrapper} ${headImageWrapperClass} 
      ${isArtistPage ? styles.artistImgWrapper : " "}
      ${isUserPage ? styles.artistImgWrapper : " "}
      ${isShowPage ? styles.showImgWrapper : " "}`}
    >
      {image && <img src={image} alt="" />}
      {!image && headSvg}
    </div>
  );
};

export default HeadImage;
