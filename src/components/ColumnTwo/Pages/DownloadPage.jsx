import React from "react";
import GreenyButton from "../Buttons/GreenyButton";

import styles from "./DownloadPage.module.css";

const DownloadPage = () => {
  let img = "https://open.spotifycdn.com/cdn/images/devices/mac.1584582e.png";
  let downloadPageLink = "https://www.spotify.com/in-en/download/";
  return (
    <div className={styles.center}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={img} alt="" />
        </div>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>
            Seamlessly listen to music you love. Download{" "}
          </h2>
          <h2 className={styles.title}>the Spotify app for your computer.</h2>
        </div>
        <GreenyButton to={downloadPageLink} labelText="Get our free app" />
      </div>
    </div>
  );
};

export default DownloadPage;
