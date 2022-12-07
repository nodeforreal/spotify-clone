import React, { useState, useEffect, useRef } from "react";
import useResizeTrigger from "../../../../hooks/useResizeTrigger";

import SliderButton from "./SliderButton";
import Slide from "./Slide";

import styles from "./Slider.module.css";
const { wrapper, slider } = styles;

const Slider = ({ slideList }) => {
  const { width, height } = useResizeTrigger();

  const [btnState, setBtnState] = useState({
    forward: false,
    backward: false,
  });

  const slidesUtilClassName = "user-top-genres-slides-scroll-x";
  let sliderRef = useRef(null);
  let sliderWidthRef = useRef(null);

  function moveNext() {
    const slider = sliderRef.current;
    const sliderWidth = sliderWidthRef.current;
    slider.scrollLeft = Math.ceil(slider.scrollLeft + sliderWidth);
  }

  function movePrev() {
    const slider = sliderRef.current;
    const sliderWidth = sliderWidthRef.current;
    slider.scrollLeft = slider.scrollLeft - sliderWidth;
  }
  const buttonClickHandler = () => {
    const slider = sliderRef.current;
    const sliderWidth = sliderWidthRef.current;

    if (Math.floor(slider.scrollLeft) === 0) {
      setBtnState({
        forward: true,
        backward: false,
      });
    } else if (
      Math.floor(slider.scrollLeft) ===
      Math.floor(slider.scrollWidth - sliderWidth)
    ) {
      setBtnState({
        forward: false,
        backward: true,
      });
    } else {
      setBtnState({
        forward: true,
        backward: true,
      });
    }
  };

  useEffect(() => {
    const sliderDom = document.querySelector("." + slidesUtilClassName);
    sliderRef.current = sliderDom;
    sliderWidthRef.current = sliderDom.getBoundingClientRect().width;

    if (sliderDom.scrollLeft === 0) {
      setBtnState({
        forward: true,
        backward: false,
      });
    }
  }, [width, height]);

  return (
    <div className={wrapper}>
      {btnState.forward && (
        <SliderButton
          icon={"forward"}
          btnStyle={{ left: "100%" }}
          clickHandler={() => {
            moveNext();
            buttonClickHandler();
          }}
        />
      )}
      {btnState.backward && (
        <SliderButton
          icon={"backward"}
          btnStyle={{ left: "0%" }}
          clickHandler={() => {
            movePrev();
            buttonClickHandler();
          }}
        />
      )}

      <Slides slideList={slideList} slidesUtilClassName={slidesUtilClassName} />
    </div>
  );
};

const Slides = ({ slideList, slidesUtilClassName }) => {

  return (
    <div className={slider + " " + slidesUtilClassName}>
      {
      slideList.map((slide, index) => {
        return (
          <Slide
            key={index}
            title={"Title-" + slide}
            image={
              "https://i.pinimg.com/564x/c4/ec/be/c4ecbe7c4c030379e886e5552a7f4ba9.jpg"
            }
          />
        );
      })
      }
    </div>
  );
};

export default Slider;
