import React from "react";
import { Link } from "react-router-dom";
import useMatchPath from "../../hooks/useMatchPath";
import styles from "./PlayListNavigation.module.css";
import playList from "./data/playListData";
import InstallApp from "./InstallApp";
import CustomScrollBar from "../CustomScrollBar/CustomScrollBar";

// nav styles
const {
  navigationMenu,
  playlistsWrapper,
  playlistItems,
  menuItem,
  activeMenu,
  grayLine,
} = styles;

const PlayListNavigation = () => {

  // for matching current URL location.
  const { pathName } = useMatchPath();

  const menuItems = playList.map((item, index) => {
    const { path } = item;
    const isActive = path === pathName;
    return <MenuItem key={index} isActive={isActive} {...item} />;
  });

  return (
    <>
      <hr className={grayLine} />
      <section className={navigationMenu}>
        <div className={playlistsWrapper}>
          <CustomScrollBar
            wrapperClassName={playlistsWrapper}
            contentClassName={playlistItems}
            trackClassName={"playlist-nav-track"}
            thumbClassName={"playlist-nav-thumb"}
          />
          <div className={playlistItems}>{menuItems}</div>
        </div>
        <InstallApp />
      </section>
    </>
  );
};


const MenuItem = ({ path, name, isActive }) => {
  return (
    <Link
      to={path}
      className={!isActive ? menuItem : `${activeMenu} ${menuItem}`}
    >
      {name}
    </Link>
  );
};

export default PlayListNavigation;
