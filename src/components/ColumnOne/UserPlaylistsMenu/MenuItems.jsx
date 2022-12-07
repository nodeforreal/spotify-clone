import React from "react";
import { useLocation } from "react-router-dom";

import MenuItem from "./MenuItem";

import styles from "./MenuItems.module.css";
const { wrapper } = styles;

const MenuItems = ({ playlists }) => {
  const { pathname } = useLocation();

  const isActive = (path) => {
    return path === pathname;
  };

  return (
    <div className={wrapper}>
      {playlists.map((playlist, index) => {
        return (
          <MenuItem
          key={index}
            path={"/playlist/"+index }
            labelText={"playlist" + index}
            isActive={isActive("/playlist" + index)}
          />
        );
      })}
    </div>
  );
};

export default MenuItems;
