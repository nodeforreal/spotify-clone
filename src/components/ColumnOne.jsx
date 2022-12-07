import React from "react";

import SpotifyLogo from "./ColumnOne/SpotifyLogo";
import AppMenuContainer from "./ColumnOne/AppMenuContainer";
import UserMenuContainer from "./ColumnOne/UserMenuContainer";
import UserPlaylistsMenuContainer from "./ColumnOne/UserPlaylistsMenuContainer";
import MakeScrollable from "./MakeScrollable/MakeScrollable";
import InstallAppContainer from "./ColumnOne/InstallAppContainer";
import CurrentTrackPosterContainer from "./ColumnOne/CurrentTrackPosterContainer";

import styles from "./ColumnOne.module.css";

const {
  wrapper,
  rowOne,
  rowTwo,
  expandableWrapper,
  scrollWrapper,
  contentWrapper,
} = styles;

const ColumnOne = () => {
  return (
    <aside id={wrapper}>
      <div className={rowOne}>
        <SpotifyLogo />
        <AppMenuContainer />
        <UserMenuContainer />
      </div>
      <div className={rowTwo}>
        <MakeScrollable
          // class for util process get scroll wrapper scroll details.
          scrollWrapperClass={scrollWrapper}
          contentWrapperClass={contentWrapper}
          scrollType={"vertical"}
          makeScrollableStyle={{position:'relative'}}
        >
          <UserPlaylistsMenuContainer />
        </MakeScrollable>
      </div>
      <div className={expandableWrapper}>
        <InstallAppContainer />
        {true && (
          <CurrentTrackPosterContainer
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU"
            }
          />
        )}
      </div>
    </aside>
  );
};

export default ColumnOne;
