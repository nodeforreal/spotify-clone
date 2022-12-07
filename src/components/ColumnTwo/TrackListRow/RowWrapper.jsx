import React, { useContext, useEffect } from "react";
import { Context } from "./PagePlaylist";

import styles from "./RowWrapper.module.css";
const RowWrapper = ({ wrapperClass, children }) => {
  const { gridClass } = useContext(Context);

  // let handleSelection = (e) => {
  //   console.log(e.currentTarget);
  //   const getAllTrackList = document.querySelectorAll("." + styles.wrapper);

  //   getAllTrackList.forEach((row) => {
  //     if (row === e.currentTarget) {
  //       if (row.classList.contains(styles.changeBgOne)) {
  //         row.classList.add(styles.changeBgTwo);
  //         row.classList.remove(styles.changeBgOne);
  //       } else {
  //         row.classList.add(styles.changeBgOne);
  //         row.classList.remove(styles.changeBgTwo);
  //       }
  //     } else {
  //       row.classList.remove(styles.changeBgOne);
  //       row.classList.remove(styles.changeBgTwo);
  //     }
  //   });
  // };

  return (
    <div
      className={`${styles.wrapper} ${wrapperClass} ${gridClass} track-list-row`}
      // onClick={handleSelection}
    >
      {children}
    </div>
  );
};

export default React.memo(RowWrapper);
