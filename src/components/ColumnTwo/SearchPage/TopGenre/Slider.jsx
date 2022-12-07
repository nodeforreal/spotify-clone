import { useEffect, useState, useRef } from "react";

import Slide from "./Slide";
import SliderButton from "./SliderButton";

import styles from "./Slider.module.css";

const Slider = () => {
  const [state, setState] = useState({ leftBtn: false, rightBtn: false });
  const sliderRef = useRef(null);
  let sliderDOM = sliderRef.current;

  const handleButtons = () => {
    const wrapperWidth = sliderRef.current.clientWidth;
    const scrollWidth = sliderRef.current.scrollWidth;
    const scrollLeft = Math.ceil(sliderRef.current.scrollLeft);

    if (scrollWidth === wrapperWidth) {
      return setState({ rightBtn: false, leftBtn: false });
    }

    if (scrollLeft === 0) {
      setState({ rightBtn: true, leftBtn: false });
    }

    if (scrollLeft === scrollWidth - wrapperWidth) {
      setState({ leftBtn: true, rightBtn: false });
    }

    if (scrollLeft > 0 && scrollLeft < scrollWidth - wrapperWidth) {
      setState({ leftBtn: true, rightBtn: true });
    }
  };

  const moveForward = () => {
    const wrapperWidth = sliderDOM.clientWidth;
    sliderDOM.scrollLeft = sliderDOM.scrollLeft + wrapperWidth;
    handleButtons();
  };

  const moveBackWard = () => {
    const wrapperWidth = sliderDOM.clientWidth;
    sliderDOM.scrollLeft = sliderDOM.scrollLeft - wrapperWidth;
    handleButtons();
  };

  useEffect(() => {
    handleButtons();
  }, []);

  return (
    <div className={styles.wrapper}>
      {state.leftBtn && (
        <SliderButton
          btnType="backward"
          btnClass={styles.leftBtn}
          clickHandler={moveBackWard}
        />
      )}
      {state.rightBtn && (
        <SliderButton
          btnType="forward"
          btnClass={styles.rightBtn}
          clickHandler={moveForward}
        />
      )}

      <div ref={sliderRef} className={styles.scrollWrapper}>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </div>
    </div>
  );
};

export default Slider;
