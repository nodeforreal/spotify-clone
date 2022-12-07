import Slider from "./TopGenre/Slider";

import styles from "./UserTopGenresSliderContainer.module.css";
const { wrapper, head } = styles;

let slideList = [0, 1, ];

const UserTopGenresSliderContainer = () => {
  return (
    <div className={wrapper}>
      <h2 className={head}>{"Your top genres"}</h2>
      <Slider />
    </div>
  );
};

export default UserTopGenresSliderContainer;
