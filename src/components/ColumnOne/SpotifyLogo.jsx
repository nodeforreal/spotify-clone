import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo";

import styles from "./SpotifyLogo.module.css";
const { logo } = styles;

const SpotifyLogo = () => {
  return (
    <Link to="/">
      <div className={logo}>
        <Logo />
      </div>
    </Link>
  );
};

export default SpotifyLogo;
