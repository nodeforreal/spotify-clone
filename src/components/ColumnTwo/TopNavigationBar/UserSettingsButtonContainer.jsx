import React, { useState } from "react";

import UserProfile from "./UserSettingsButton/UserProfile";
import UserName from "./UserSettingsButton/UserName";
import Arrow from "./UserSettingsButton/Arrow";
import SettingsMenu from "./UserSettingsButton/SettingsMenu";

import styles from "./UserSettingsButtonContainer.module.css";
const { wrapper, active } = styles;

const UserSettingsButtonContainer = () => {
  const [isOpened, setIsOpened] = useState(false);

  const clickHandler = (e) => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={`${wrapper} ${isOpened && active}`} onClick={clickHandler}>
      <UserProfile
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU"
        }
      />
      <UserName name={"Kaliyamoorthy.T"} />
      <Arrow isOpened={isOpened} />
      {isOpened && <SettingsMenu />}
    </div>
  );
};

export default UserSettingsButtonContainer;
