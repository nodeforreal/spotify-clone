import React from "react";
import { Link } from "react-router-dom";

import { SILinkOpen } from "../../../../assets/SpotifyIcons";

import styles from "./DropDownMenu.module.css";
const {  wrapper, menuItem, active } = styles;

const DropDownMenu = ({ isOpen }) => {
  return (
    <section
      className={
        isOpen ? `${wrapper} ${active}` : wrapper
      }
    >
      <a
        className={menuItem}
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Account</span>
        <span>
          <SILinkOpen />
        </span>
      </a>

      <Link className={menuItem} to="/profile">
        Profile
      </Link>

      <a
        className={menuItem}
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Upgrade to Premium</span>
        <span>
          <SILinkOpen />
        </span>
      </a>

      <button className={menuItem}>Log out</button>
    </section>
  );
};

export default DropDownMenu;
