import React from "react";

import SubPage from "../SubPages/SubPage";
import ArtistPagePlaylist from "../PagePlaylist/ArtistPagePlaylist";
import CardsShelf from "../CardsShelf/CardsShelf";
import PageEndLine from "../ColumnTwo/PageEndLine";

import styles from './ArtistPage.module.css';

let img =
  " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ArtistPage = () => {
  return (
    <div className={styles.wrapper}>
      <SubPage
        coverTypeText={"artist"}
        titleText={"Artist page"}
        headImage={img}
        headBgColor="#6495ed"
        showPlayBtn={true}
        showFollowBtn={true}
        showOptionBtn={true}
        pageType={'artist'}
      >
        <ArtistPagePlaylist />
        <CardsShelf
          wrapperClass={styles.cardsShelf}
          cardList={data}
          titleOnly={true}
          titleText="Title Check"
          shelfPath={"/path"}
          seeMoreText="see more"
        />
                <CardsShelf
          wrapperClass={styles.cardsShelf}
          cardList={data}
          titleOnly={true}
          titleText="Title Check"
          shelfPath={"/path"}
          seeMoreText="see more"
        />
                <CardsShelf
          wrapperClass={styles.cardsShelf}
          cardList={data}
          titleOnly={true}
          titleText="Title Check"
          shelfPath={"/path"}
          seeMoreText="see more"
        />
                <CardsShelf
          wrapperClass={styles.cardsShelf}
          cardList={data}
          titleOnly={true}
          titleText="Title Check"
          shelfPath={"/path"}
          seeMoreText="see more"
        />
      </SubPage>
      <PageEndLine />
    </div>
  );
};

export default ArtistPage;
