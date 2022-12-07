import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ViewNavigatorContainer from "./TopNavigationBar/ViewNavigatorContainer";
import CurrentTrackInfoContainer from "./TopNavigationBar/CurrentTrackInfoContainer";
import UpgradeButtonContainer from "./TopNavigationBar/UpgradeButtonContainer";
import UserSettingsButtonContainer from "./TopNavigationBar/UserSettingsButtonContainer";
import SearchBar from "./TopNavigationBar/SearchBar/SearchBar";
import LibraryNavigationBar from "./LibraryPage/LibraryNavigationBar";

import styles from "./TopNavigationBar.module.css";

const TopNavigationBar = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <nav className={`${styles.wrapper} top-navigation-bar`}>
      <div className={styles.sectionOne}>
        <ViewNavigatorContainer />
        <Routes>
          <Route path="/search/*" element={<SearchBar />}></Route>
          <Route path="/collection" element={<LibraryNavigationBar />}>
            <Route
              path="playlists"
              element={<LibraryNavigationBar />}
            ></Route>
            <Route
              path="podcasts"
              element={<LibraryNavigationBar />}
            ></Route>
            <Route
              path="artists"
              element={<LibraryNavigationBar />}
            ></Route>
            <Route
              path="albums"
              element={<LibraryNavigationBar />}
            ></Route>
          </Route>
        </Routes>
        {/* <CurrentTrackInfoContainer /> */}
      </div>

      <div className={styles.sectionTwo}>
        <UpgradeButtonContainer />
        <UserSettingsButtonContainer />
      </div>
    </nav>
  );
};

export default TopNavigationBar;
