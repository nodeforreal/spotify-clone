import React from "react";
import { useLocation, Link } from "react-router-dom";

import { SIDownload } from "../../assets/SpotifyIcons";

import styles from "./InstallAppContainer.module.css";
const { wrapper, icon, label, active, noActive } = styles;

const InstallAppContainer = () => {
  const { pathname } = useLocation();

  const isActive = (pathname === '/download')
  return (
    <Link to="/download">
      <div className={wrapper}>
        <span className={`${icon}  ${isActive ? active : noActive}`}>
          <SIDownload />
        </span>
        <span
          className={`${label}  ${isActive ? active : noActive}`}
        >
          Install App
        </span>
      </div>
    </Link>
  );
};

export default InstallAppContainer;
