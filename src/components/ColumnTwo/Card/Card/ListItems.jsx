import React from "react";
import { Link } from "react-router-dom";

import styles from "./ListItems.module.css";
const { wrapper, listItem, text } = styles;

const ListItems = ({ listItems }) => {
  return (
    <div className={wrapper}>
      {listItems.map((item, index) => {
        return (
          <span className={listItem} key={index}>
            {index === 0 ? "" : ", "}
            <Link className={text} to={"/card-playlist"}>
              {"playlist"}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default ListItems;
