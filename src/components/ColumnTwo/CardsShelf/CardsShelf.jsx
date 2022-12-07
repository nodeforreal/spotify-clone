import useColumnCounts from "../../../hooks/useColumnCounts";

import ShelfName from "./ShelfName";
import Card from "../Cards/Card";

import styles from "./CardsShelf.module.css";
const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const CardsShelf = ({
  wrapperClass,
  titleOnly,
  shelfPath,
  seeMoreText,
  titleText,
  titleDescText,
}) => {
  const { columnCount } = useColumnCounts();
  return (
    <section
      className={`${styles.wrapper} ${wrapperClass ? wrapperClass : ""}`}
    >
      <ShelfName
        titleOnly={titleOnly}
        path={shelfPath}
        seeMoreText={seeMoreText}
        titleText={titleText}
        titleDescText={titleDescText}
      />
      <div className={styles.shelfWrapper}>
        {data.slice(0, columnCount).map((card, key) => {
          return <Card key={key} />;
        })}
      </div>
    </section>
  );
};

export default CardsShelf;
