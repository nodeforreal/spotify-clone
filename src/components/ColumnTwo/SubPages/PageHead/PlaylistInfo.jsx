import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./PlaylistInfo.module.css";

let data = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU",
    name: "kaliyamoothy",
    path: "/profile",
  },
  {
    name: "Rachel",
    path: "/artist",
  },
  {
    name: "2018",
  },
  {
    name: "22 songs",
  },
  {
    name: "and more",
  },
];
const PlaylistInfo = ({}) => {
  return (
    <div className={styles.wrapper}>
      {data.map(({ img, path, name }, index) => {
        return (
          <span key={index} className={styles.textWrapper}>

            {(index !== 0 && data.length !== index+1)  ? <span className={styles.dot}></span> : ""}

            {img && <img src={img} alt="" className={styles.img} />}
            
            {path && <NavLink key={index} to={path} className={styles.creator} children={name} />}
            
            {!path &&  <span key={index} className={styles.others}>
              {data.length-1 !== index ? name : ',' }
             {data.length === index+1 ? <span className={styles.andMore}>{name}</span> : ''}
            </span>
}
          </span>
        );
      })}
    </div>
  );
};

export default PlaylistInfo;
