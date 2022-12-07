import React from "react";

import PlaylistInfo from "./PageHead/PlaylistInfo";
import styles from "./HeadInfos.module.css";

const HeadInfos = ({ showUserName,userNameText,countLabelText }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.desc}> lorem ipsum kallk lks as lks k laklll</p>
      <PlaylistInfo path={"/profile"} userNameText={userNameText} />
    </div>
  );
};

export default HeadInfos;
