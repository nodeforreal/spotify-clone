import React,{useState} from "react";

import MenuItem from "./MenuItem";

import { SILinkOpen } from "../../../../assets/SpotifyIcons";
import styles from "./SettingsMenu.module.css";
const { wrapper } = styles;

const SettingsMenu = () => {

  return (
    <div className={wrapper} >
      <MenuItem labelText={"Account"} icon={<SILinkOpen />} path="/account" />
      <MenuItem labelText={"Profile"} path="/user/328737343" />
      <MenuItem
        labelText={" Upgrade to Premium "}
        icon={<SILinkOpen />}
        path="/upgrade"
      />
      <MenuItem labelText={"Log out"} path="/logout" />
    </div>
  );
};

export default SettingsMenu;
