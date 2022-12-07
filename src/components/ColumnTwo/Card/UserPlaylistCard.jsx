import React from "react";
import { Link } from "react-router-dom";

import CardImage from "./Card/CardImage";
import CardTitle from "./Card/CardTitle";
import CardDescription from "./Card/CardDescription";

import styles from "./UserPlaylistCard.module.css";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const UserPlaylistCard = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/recommendation-card" className={styles.link}></Link>
      <CardImage image={img} />
      <CardTitle titleText={"Daily mix"} />
      <CardDescription descText={"By keeforever_keeforever_keeforever_"} />
    </div>
  );
};

export default UserPlaylistCard;
