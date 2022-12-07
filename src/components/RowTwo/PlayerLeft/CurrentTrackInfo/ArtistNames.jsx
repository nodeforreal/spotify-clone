import React from "react";
import { Link } from "react-router-dom";

import styles from "./ArtistNames.module.css";
const { wrapper, text } = styles;

const ArtistNames = ({ nameList }) => {
  return (
    <div className={wrapper}>
      <NameList nameList={nameList} />
    </div>
  );
};

const NameList = ({ nameList }) => {
  return (
    <>
      {nameList.map((item, index) => {
        return <Name key={index} name={"Artist"} index={index} />;
      })}
    </>
  );
};

const Name = ({ path, name, index }) => {
  return (
    <>
      {index === 0 ? "" : ", "}
      <Link className={text} to={"/artist"}>
        {name}
      </Link>
    </>
  );
};

export default ArtistNames;
