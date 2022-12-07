import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import styles from "./ScrollBar.module.css";
const { track, thumb } = styles;

const ScrollBar = ({ scrollWrapperClass, contentWrapperClass }) => {
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // scroll bar DOM
    const trackDOM = trackRef.current;
    const thumbDOM = thumbRef.current;

    // scroll wrapper and content DOM
    const scrollWrapperDOM = document.querySelector("." + scrollWrapperClass);
    const content = document.querySelector("." + contentWrapperClass);

    // set scrollTop=0 every location change.
    scrollWrapperDOM.scrollTop = 0;

    // scroll bar properties
    const Scroll = () => {
      let wrapperHeight = scrollWrapperDOM.offsetHeight;
      let scrollHeight = scrollWrapperDOM.scrollHeight;
      return {
        wrapperHeight: wrapperHeight,
        scrollHeight: scrollHeight,
        thumbHeight: wrapperHeight / (scrollHeight / wrapperHeight),
        scrollTop: scrollWrapperDOM.scrollTop,
        thumbTop: (scrollWrapperDOM.scrollTop / scrollHeight) * 100,
        thumbClientTop: thumbDOM.getBoundingClientRect().top,
        thumbClientBottom: thumbDOM.getBoundingClientRect().bottom,
        trackClientTop: trackDOM.getBoundingClientRect().top,
        trackClientBottom: trackDOM.getBoundingClientRect().bottom,
      };
    };

    // thumb height update
    const updateDOM = () => {
      if (Scroll().thumbHeight === Scroll().wrapperHeight) {
        thumbDOM.style.height = 0 + "px";
      } else {
        thumbDOM.style.height = Scroll().thumbHeight + "px";
      }
    };

    // control thumb by scrolling page
    const scrollHandler = () => {
      thumbDOM.style.top = Scroll().thumbTop + "%";
    };

    // thumb click and drag to scroll page
    /*var for initial click of thumb */
    let initialThumbClientY;

    // thumb mouse up event
    let thumbMouseUpHandler = () => {
      window.removeEventListener("mousemove", thumbMouseMoveHandler);
      window.removeEventListener("mouseup", thumbMouseUpHandler);
    };

    // thumb mouse down event
    let thumbMouseMoveHandler = (e) => {
      let trackClientY = e.clientY - Scroll().trackClientTop;
      let scrollTop =
        ((trackClientY - initialThumbClientY) / Scroll().thumbHeight) *
        Scroll().wrapperHeight;
      scrollWrapperDOM.scrollTop = scrollTop;
    };

    // thumb mouse down event
    const thumbMouseDownHandler = (e) => {
      e.stopPropagation();
      initialThumbClientY = e.clientY - Scroll().thumbClientTop;
      window.addEventListener("mousemove", thumbMouseMoveHandler);
      window.addEventListener("mouseup", thumbMouseUpHandler);
    };

    // thumb moving interval ;
    let thumbMovingInterval;
    const trackMouseUpHandler = () => {
      console.log("track-mouse-up");
      window.removeEventListener("mousemove", trackMouseMoveHandler);
      window.removeEventListener("mouseup", trackMouseUpHandler);
      clearInterval(thumbMovingInterval);
    };

    // initial clientY for further mouse move
    let trackMouseMoveClintY;
    const trackMouseMoveHandler = (e) => {
      trackMouseMoveClintY = e.clientY;
    };

    // track mouse down event
    const trackMouseDownHandler = (e) => {
      trackMouseMoveClintY = e.clientY;
      e.stopPropagation();
      thumbMovingInterval = setInterval(() => {
        let thumbOffsetTop = Scroll().thumbClientTop - Scroll().trackClientTop;
        let landingPosition = (Scroll().thumbHeight / 100) * 17;

        if (
          trackMouseMoveClintY >
          Scroll().thumbClientBottom - landingPosition
        ) {
          scrollWrapperDOM.scrollTop =
            ((thumbOffsetTop + 3) / Scroll().thumbHeight) *
            Scroll().wrapperHeight;
          // stop interval
          if (Scroll().thumbClientTop - landingPosition >= trackMouseMoveClintY) {
            clearTimeout(thumbMovingInterval);
          }
        }

        if (trackMouseMoveClintY < Scroll().thumbClientTop + landingPosition) {
          scrollWrapperDOM.scrollTop =
            ((thumbOffsetTop - 3) / Scroll().thumbHeight) *
            Scroll().wrapperHeight;

          // stop interval
          if (Scroll().thumbClientTop + landingPosition <= trackMouseMoveClintY) {
            clearTimeout(thumbMovingInterval);
          }
        }
      }, 1);
      // window mouse up and move event
      window.addEventListener("mousemove", trackMouseMoveHandler);
      window.addEventListener("mouseup", trackMouseUpHandler);
      
    };

    // event listeners
    // scroll wrapper DOM
    scrollWrapperDOM.addEventListener("scroll", scrollHandler);
    // thumb DOM
    thumbDOM.addEventListener("mousedown", thumbMouseDownHandler);
    // track DOM
    trackDOM.addEventListener("mousedown", trackMouseDownHandler);

    // mutation observer for detect content change.
    let mutationObserver = new MutationObserver(() => {
      updateDOM();
    });

    // resize observer for detect window resize,zooming change.
    let resizeObserver = new ResizeObserver(() => {
      updateDOM();
    });

    mutationObserver.observe(content, {
      attributes: true,
      subtree: true,
      childList: true,
    });

    resizeObserver.observe(content);

    //initial thumb height update
    updateDOM();

    // clean ups
    return () => {
      console.log("clean up");
      scrollWrapperDOM.removeEventListener("scroll", scrollHandler);
      thumbDOM.removeEventListener("mousedown", thumbMouseDownHandler);
      window.removeEventListener("mousemove", thumbMouseMoveHandler);
      window.removeEventListener("mouseup", thumbMouseUpHandler);
      trackDOM.removeEventListener("mousedown", trackMouseDownHandler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div ref={trackRef} className={`${track} ${scrollWrapperClass}--track`}>
      <div
        ref={thumbRef}
        className={`${thumb} ${scrollWrapperClass}--thumb`}
      ></div>
    </div>
  );
};

export default React.memo(ScrollBar);
