import React from "react";

import styles from "./DescDotSplit.module.css";
let data = ["May 2015", "01 Min skks skkskkkk kkk fjld lsdl slsjlf lljsljfs ljsflsjf"];
const DescDotSplit = ({ cardType }) => {
  
  const dotType = (cardType === "album" ? styles.albumDot : styles.episodeDot);
  const changeFontSize = (cardType === "album" && styles.albumDescText)
  
  
  return (
    <div className={`${styles.wrapper} ${changeFontSize}`}>
      {data.map((text, index) => {
        if (index !== 0) {
          return (
            <span
              key={index}
              className={`${styles.descText} ${styles.withDot} ${dotType}`}
            >
              {text}
            </span>
          );
        }
        return (
          <span key={index} className={`${styles.descText}` }>
            {text}
          </span>
        );
      })}
    </div>
  );
};

export default DescDotSplit;
