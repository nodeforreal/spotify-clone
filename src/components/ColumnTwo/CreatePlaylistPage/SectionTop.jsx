import React from "react";

import SplitterLine from "../ColumnTwo/SplitterLine";
import FindBySearch from "./SectionTop/FindBySearch";

import styles from "./SectionTop.module.css";
import { SICrossOutline } from "../../../assets/SpotifyIcons";

const SectionTop = ({ clickHandler, changeView }) => {

  return (
    <section className={styles.wrapper}>
      {changeView && <SplitterLine />}

      <div className={styles.sectionWrapper}>

        <div className={styles.sectionOne}>
          {changeView && <FindBySearch />}
        </div>

        <div className={styles.sectionTwo}>
          <button className={styles.viewToggleBtn} onClick={clickHandler}>
            {changeView ? <SICrossOutline /> : <span>Find more</span>}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
