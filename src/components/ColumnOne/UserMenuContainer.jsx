import React from "react";
import { useLocation } from "react-router-dom";

import MenuItem from "./UserMenu/MenuItem";

import { SIAddPlus, SILikeFill, SIEpisode } from "../../assets/SpotifyIcons";

import styles from "./UserMenuContainer.module.css";
const { wrapper,line } = styles;

const UserMenuContainer = () => {
  const { pathname } = useLocation();

  const isActive = (path) => {
    return path === pathname;
  };
  return (
    <div className={wrapper}>
      <MenuItem
        path={"/playlist/2387382764834"}
        icon={<SIAddPlus />}
        labelText={"Create Playlist"}
        isActive={isActive("/playlist")}
      />

      <MenuItem
        path={"/collection/tracks"}
        icon={<SILikeFill  svgStyle={{ fill: "#fff" }}/>}
        labelText={"Liked Songs"}
        isActive={isActive("/collection/tracks")}
        iconStyle={{
          backgroundImage: "linear-gradient(120deg,#4d19f3,#fff)",
        }}
       
      />

      <MenuItem
        path={"/collection/episodes"}
        icon={<SIEpisode svgStyle={{fill: "#1ed760"}} />}
        labelText={"Your Episodes"}
        isActive={isActive("/collection/episodes")}
        iconStyle={{
          backgroundColor: "#004638",
          borderRadius: "3px",
        }}
      />
      <hr className={line}/>
    </div>
  );
};

export default UserMenuContainer;
