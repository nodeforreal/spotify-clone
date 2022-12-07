import React from "react";
import { Link } from "react-router-dom";
import useMatchPath from "../../hooks/useMatchPath";
import styles from "./InstallApp.module.css";
import { SIDownload } from "../../assets/SpotifyIcons";

const { installAppWrapper, text, link, itemActive } = styles;

const InstallApp = () => {
  const { isMatch } = useMatchPath("/download");

  return (
    <section
      className={
        isMatch ? `${installAppWrapper} ${itemActive}` : installAppWrapper
      }
    >
      <Link to="/download" className={link}>
        <SIDownload />
        <span className={text}>Install App</span>
      </Link>
    </section>
  );
};
export default InstallApp;
