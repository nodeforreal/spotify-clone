import React from "react";

import SubPage from "../SubPages/SubPage";
import CardsShelf from "../CardsShelf/CardsShelf";
import styles from "./UserPage.module.css";
import UserPageTopSongs from '../PagePlaylist/UserPageTopSongs'
import PageEndLine from "../ColumnTwo/PageEndLine";

let img =
  " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const UserPage = () => {
  return (
    <div className={styles.wrapper}>
      <SubPage
        coverTypeText={"profile"}
        titleText={"User page"}
        headImage={img}
        headBgColor="#6495ed"
        showFollowBtn={true}
        showOptionBtn={true}
        pageType={'user'}
      >
        <CardsShelf
          wrapperClass={styles.cardsShelf}
          cardList={data}
          titleText="Top artists this month"
          // shelfPath={`playlists`}
          seeMoreText="see more"
          titleDescText={'Only visible to you.'}
        />
        <UserPageTopSongs />
        <CardsShelf
          wrapperClass={styles.cardsShelf}
          cardList={data}
          titleText="Public Playlists"
          shelfPath={`playlists`}
          seeMoreText="see more"
        />

        <CardsShelf
          wrapperClass={styles.cardsShelf}
          cardList={data}
          titleText="Followers"
          shelfPath={`followers`}
          seeMoreText="see more"
        />

        <CardsShelf
          wrapperClass={styles.cardsShelf}
          cardList={data}
          titleText="Following"
          shelfPath={`following`}
          seeMoreText="see more"
        />
      </SubPage>
      <PageEndLine />
    </div>
  );
};

export default UserPage;
