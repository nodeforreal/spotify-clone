import React from "react";
import { Link } from "react-router-dom";

import CardImage from "./Card/CardImage";
import CardTitle from "./Card/CardTitle";
import CardDescription from "./Card/CardDescription";
import ListItems from "./Card/ListItems";

import styles from "./RecommendationCard.module.css";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const desc =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sunt reprehenderit et dignissimos minus vel quis quaerat possimus perspiciatis unde molestias maxime, sapiente incidunt earum? Nam consequatur eaque dolorum ullam!";
const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const RecommendationCard = ({ isList, isDesc }) => {
  return (
    <div className={styles.wrapper}>
      <Link to="/recommendation-card" className={styles.link}></Link>
      <CardImage image={img} />
      <CardTitle titleText={"Daily mix"} />
      {isList && <ListItems listItems={data} />}
      {isDesc && <CardDescription descText={desc} />}
    </div>
  );
};

export default RecommendationCard;
