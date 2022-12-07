import React from "react";

import PageHead from "../SubPages/PageHeadContainer";
import PageNeck from "../SubPages/PageNeck";
import AlbumPagePlaylist from "../PagePlaylist/AlbumPagePlaylist";
import PageEndLine from "../ColumnTwo/PageEndLine";

import SubPage from "../SubPages/SubPage";

let img =
  " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const AlbumPage = () => {
  return (
    <div className={StyleSheet.wrapper}>
      <SubPage
        coverTypeText={"album"}
        titleText={"album page"}
        headImage={img}
        // headBgColor='#6495ed'
        showPlayBtn={true}
        showOptionBtn={true}
        showLikeBtn={true}
      >
        <AlbumPagePlaylist />
      </SubPage>
    </div>
  );
};

export default AlbumPage;
