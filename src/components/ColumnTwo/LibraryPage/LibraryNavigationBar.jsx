import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./LibraryNavigationBar.module.css";

const LibraryNavigationBar = () => {
  const { pathname } = useLocation();

  const isActive = (currentPath) => {
    return currentPath === pathname;
  };
  
  return (
    <div className={styles.wrapper}>
      <Menu
        isActive={isActive("/collection/playlists")}
        path={"/collection/playlists"}
        labelText={"Playlists"}
      />
      <Menu
        isActive={isActive("/collection/podcasts")}
        path={"/collection/podcasts"}
        labelText={"Podcasts"}
      />
      <Menu
        isActive={isActive("/collection/artists")}
        path={"/collection/artists"}
        labelText={"Artists"}
      />
      <Menu
        isActive={isActive("/collection/albums")}
        path={"/collection/albums"}
        labelText={"Albums"}
      />
    </div>
  );
};

const Menu = ({ labelText, path, isActive }) => {
  return (
    <NavLink
      to={path}
      className={`${styles.menuWrapper} ${isActive ? styles.activeTab : ""}`}
    >
      {labelText}
    </NavLink>
  );
};

export default LibraryNavigationBar;
