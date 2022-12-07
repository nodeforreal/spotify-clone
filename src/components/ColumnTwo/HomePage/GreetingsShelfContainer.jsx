import ShelfCards from "./GreetingsShelf/ShelfCards";
import ShelfName from "./GreetingsShelf/ShelfName";

import styles from "./GreetingsShelfContainer.module.css";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const GreetingsShelfContainer = () => {
  let rgb = "rgb(0,0,255)";
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `linear-gradient(${rgb},transparent)` }}
    >
      <div className={styles.shelfWrapper}>
        <ShelfName />
        <ShelfCards cardList={data} />
      </div>
    </div>
  );
};

export default GreetingsShelfContainer;
