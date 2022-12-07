import React from "react";
import PropTypes from "prop-types";

import { SIPenOutline, SITuneOutline } from "../../../../assets/SpotifyIcons";
import styles from "./HeadImage.module.css";

const HeadImage = ({ image }) => {

 console.log(image === 1)

  return (
    <div className={styles.wrapper}>
      <div className={styles.profile}>
        {image ? <img src={image} alt="" /> : <SITuneOutline />}
      </div>

      <div className={styles.choosePhoto}>
        <input type="file" id={styles.inputID} />
        <label htmlFor={styles.inputID} className={styles.uploadBtn}></label>
        <SIPenOutline />
        <span>Choose photo</span>
      </div>
    </div>
  );
};

export default HeadImage;
