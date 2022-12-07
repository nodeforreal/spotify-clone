import React from "react";

import SubPage from "../SubPages/SubPage";
import EpisodeDescription from "../EpisodePage/EpisodeDescription";
import CardsSectionView from "../CardsSectionView/CardsSectionView";
import PageEndLine from "../ColumnTwo/PageEndLine";

import styles from "./EpisodePage.module.css";

let img =
  " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const EpisodePage = () => {
  return (
    <div className={styles.wrapper}>
      <SubPage
        coverTypeText={"show"}
        titleText={"Episode page"}
        authorName={"Show Title"}
        headImage={img}
        headBgColor="#6495ed"
        showPlayBtn={true}
        showEpisodeAddBtn={true}
        showOptionBtn={true}
        pageType={"show"}
      >
        <div className={styles.pageBody}>
          <EpisodeDescription />
          <CardsSectionView
            sectionTitle="You might also like"
            wrapperClass={styles.cardsSection}
          />
        </div>
      </SubPage>
      <PageEndLine />
    </div>
  );
};

export default EpisodePage;
