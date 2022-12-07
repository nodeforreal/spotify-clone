import React from "react";

import SubPage from "../SubPages/SubPage";
import EpisodeSection from "../ShowPage/EpisodeSection";
import AboutSection from "../ShowPage/AboutSection";
import PageEndLine from "../ColumnTwo/PageEndLine";

import styles from "./ShowPage.module.css";
let img =
  " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const ShowPage = () => {
  return (
    <div className={styles.wrapper}>
      <SubPage
        coverTypeText={"show"}
        titleText={"Show page"}
        authorName={"Gimlet"}
        headImage={img}
        headBgColor="#6495ed"
        showFollowBtn={true}
        showOptionBtn={true}
        pageType={"show"}
      >
        <div className={styles.pageBody}>
          <EpisodeSection wrapperClass={styles.episodeSection}/>
          <AboutSection wrapperClass={styles.aboutSection}/>
        </div>
      </SubPage>
      <PageEndLine />
    </div>
  );
};

export default ShowPage;
