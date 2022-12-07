import React from "react";
import DescriptionBox from "./DescriptionBox";
import Tags from "./Tags";

import styles from "./AboutSection.module.css";

let string =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptate corrupti delectus nobis repudiandae placeat saepe laudantium? Nam debitis voluptates reprehenderit aliquid nisi, commodi quidem obcaecati! Animi optio nisi mollitia!";

const AboutSection = ({wrapperClass}) => {
  return (
    <div className={`${styles.wrapper} ${wrapperClass}`}>
      <h1 className={styles.title}>About</h1>
      <DescriptionBox descText={string} wrapperClass={styles.descBox}/>
      <Tags />
    </div>
  );
};



export default AboutSection;
