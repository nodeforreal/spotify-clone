import React from "react";
import { Link } from "react-router-dom";

import CardImage from "./Card/CardImage";
import CardTitle from "./Card/CardTitle";
import CardDescription from "./Card/CardDescription";

import styles from "./EpisodeShowCard.module.css";

const desc =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sunt reprehenderit et dignissimos minus vel quis quaerat possimus perspiciatis unde molestias maxime, sapiente incidunt earum? Nam consequatur eaque dolorum ullam!";
const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const EpisodeShowCard = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/recommendation-card" className={styles.link}></Link>
      <CardImage image={img} />
      <CardTitle titleText={"Daily mix"} />
      <CardDescription descText={desc} />
    </div>
  );
};

export default EpisodeShowCard;
