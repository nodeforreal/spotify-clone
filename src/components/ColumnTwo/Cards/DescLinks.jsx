import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DescLinks.module.css";
let linksList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const DescLinks = ({cardType}) => {
  return (
    <div className={`${styles.wrapper} ${ true ? styles.artistDesc : '' }`}>
      {true && <StringText string={""} />}
      {false && <Dot />}
      {false && <StringText string={""} />}
      {false && <List />}
    </div>
  );
};

const StringText = ({ string , cardType }) => {
  return (
    <span className={`${styles.descText} ${styles.changeTextSize} `}>
      {"Artist"}
    </span>
  );
};

const Dot = () => {
  return (
    <span className={styles.dot}>
      <span></span>
    </span>
  );
};

const List = () => {
  return (
    <>
      {linksList.map((text, index) => {
        return (
          <span key={index}>
            {index !== 0 && ", "}
            <span className={styles.descText}>
              <NavLink to={"/album"}>{"text"}</NavLink>
            </span>
          </span>
        );
      })}
    </>
  );
};

export default DescLinks;
