import React, { useContext, useEffect, useRef } from "react";
import { Context } from "./PagePlaylist";

import SplitterLine from "../ColumnTwo/SplitterLine";

import { SIClockOutline } from "../../../assets/SpotifyIcons";
import styles from "./HeadRow.module.css";

const RowHead = ({ rootMarginTop, stickyTop }) => {
  const { gridClass, trackTypeClass, relDateClass, dateAddedClass } = useContext(Context);
  const rowRef = useRef(null);
  const secTopRef = useRef(null);

  useEffect(() => {
    let target = document.querySelector(".track-list-row");

    let observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          rowRef.current.classList.add(styles.stickyBg);
          secTopRef.current.classList.add(styles.stickySecTop);
        } else {
          rowRef.current.classList.remove(styles.stickyBg);
          secTopRef.current.classList.remove(styles.stickySecTop);
        }
      },
      { rootMargin: `${rootMarginTop} 0px 0px 0px` }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <div
      ref={rowRef}
      className={`${styles.wrapper}`}
      style={{ top: stickyTop }}
    >
      <div ref={secTopRef} className={`${styles.secTop} ${gridClass}`}>
        <div className={`${styles.index}`}> # </div>

        <div className={`${styles.title}`}> title </div>

        <div className={`${styles.trackType} ${trackTypeClass}`}>
          {true ? "album" : "podcasts or albums"}
        </div>

        <div className={`${styles.relDate} ${relDateClass}`}>release date</div>

        <div className={`${styles.dateAdded} ${dateAddedClass}`}>
          date added
        </div>

        <div className={`${styles.time}`}>
          <SIClockOutline />
        </div>
      </div>

      <div className={`${styles.secBottom} ${styles.stickySecBottom}`}>
        <SplitterLine />
      </div>
    </div>
  );
};

export default React.memo(RowHead);
