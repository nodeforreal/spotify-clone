import React from "react";
import { useLocation } from "react-router-dom";

import MenuItem from "./AppMenu/MenuItem";

import {
  SIHomeOutline,
  SIHomeFill,
  SISearchOutline,
  SISearchFill,
  SILibraryOutline,
  SILibraryFill,
} from "../../assets/SpotifyIcons";

import styles from "./AppMenuContainer.module.css";
const { wrapper } = styles;

const AppMenuContainer = () => {
  const { pathname } = useLocation();

  const isActive = (path) => {
    return path === pathname;
  };

  return (
    <div className={wrapper}>
      <MenuItem
        path={"/"}
        icon={{ active: <SIHomeFill />, noActive: <SIHomeOutline /> }}
        labelText={"Home"}
        isActive={isActive('/')}
      />
      <MenuItem
        path={"/search"}
        icon={{ active: <SISearchFill />, noActive: <SISearchOutline /> }}
        labelText={"Search"}
        isActive={isActive('/search')}
      />
      <MenuItem
        path={"/collection/playlists"}
        icon={{ active: <SILibraryFill />, noActive: <SILibraryOutline /> }}
        labelText={"Library"}
        isActive={isActive('/collection/playlists')}
      />
    </div>
  );
};

export default AppMenuContainer;
