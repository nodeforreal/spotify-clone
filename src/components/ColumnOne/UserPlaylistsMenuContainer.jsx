import React from "react";

import MenuItems from "./UserPlaylistsMenu/MenuItems";

import styles from "./UserPlaylistsMenuContainer.module.css";
const { wrapper } = styles;

const playlists = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const UserPlaylistsMenuContainer = () => {
  return (
    <div className={wrapper}>
      <MenuItems playlists={playlists} />
    </div>
  );
};

export default UserPlaylistsMenuContainer;
