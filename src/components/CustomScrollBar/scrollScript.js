const scrollScript = (
  heroClassName,
  contentClassName,
  trackClassName,
  thumbClassName
) => {
  const hero = document.getElementsByClassName(heroClassName)[0];
  const content = document.getElementsByClassName(contentClassName)[0];
  const track = document.getElementsByClassName(trackClassName)[0];
  const thumb = document.getElementsByClassName(thumbClassName)[0];

  let thumbClickPosition = 0;

  /* box heights */
  let heroHeight = hero.getBoundingClientRect().height;
  let contentHeight = content.getBoundingClientRect().height;
  let trackHeight = track.getBoundingClientRect().height;

  /* track height */
  track.style.height = heroHeight + "px";

  /*
   * thumb scroll times
   * thumb height
   * set thumb height
   */

  let thumbScrollTimes = contentHeight / heroHeight;
  let thumbHeight = heroHeight / thumbScrollTimes;
  thumb.style.height = thumbHeight + "px";

  //zoom event (updates height of boxes)
  const contentResizing = () => {
    contentHeight = content.getBoundingClientRect().height;
    heroHeight = hero.getBoundingClientRect().height;
    trackHeight = track.getBoundingClientRect().height;

    thumbScrollTimes = contentHeight / heroHeight;
    thumbHeight = heroHeight / thumbScrollTimes;
    thumb.style.height = thumbHeight + "px";

    track.style.height = heroHeight + "px";

    if (contentHeight < heroHeight) {
      track.style.display = "none";
    } else {
      track.style.display = "block";
    }
  };
  // zoom event listeners
  window.addEventListener("wheel", contentResizing);
  window.addEventListener("keydown", contentResizing);
  window.addEventListener("resize", contentResizing);

  //--------section 1 - thumb handling and scroll page-------------/

  /*
   * mousemove handler  for mouse movements.
   */
  const mouseMoveHandler = (e) => {
    //current click position of track
    let clientY = e.clientY - track.getBoundingClientRect().top + 10;

    if (
      clientY - thumbClickPosition >= 0 &&
      clientY - thumbClickPosition + thumbHeight <= heroHeight
    ) {
      thumb.style.top = clientY - thumbClickPosition + "px";
      hero.scrollTop =
        ((clientY - thumbClickPosition) / thumbHeight) * heroHeight;

      if (clientY - thumbClickPosition < 8) {
        thumb.style.top = 0;
        hero.scrollTop = 0;
      }

      if (clientY - thumbClickPosition + thumbHeight > heroHeight - 8) {
        thumb.style.top = trackHeight - thumbHeight + "px";
        hero.scrollTop =
          (trackHeight - thumbHeight + thumbHeight / thumbHeight) * heroHeight;
      }
    }
  };

  /*
   * thumb mousedown event handler
   */

  const thumbMouseDownHandler = (e) => {
    e.stopPropagation();

    // for thumb distance between clientY.(for thumb position where we clicked)
    thumbClickPosition =
      e.clientY -
      track.getBoundingClientRect().top -
      (thumb.getBoundingClientRect().top - track.getBoundingClientRect().top);

    // mousemove event listener
    window.addEventListener("mousemove", mouseMoveHandler);
  };

  /* thumb mousedown event listener */
  thumb.addEventListener("mousedown", thumbMouseDownHandler);

  /*
   *global mouseup event listener.(for remove thumbs mousemove listener) */

  window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", mouseMoveHandler);
  });

  //-----section 2 - track click scroll handling and scroll the page --------//

  /* tracks mousedown handler. */
  const trackMouseDownHandler = (e) => {
    let trackHeight =
      track.getBoundingClientRect().bottom - track.getBoundingClientRect().top;

    // current cursor position
    let currentCursorPosition = e.clientY - track.getBoundingClientRect().top;

    const trackCursorPosition = (e) => {
      e.stopPropagation();
      currentCursorPosition = e.clientY - track.getBoundingClientRect().top;
    };

    window.addEventListener("mousemove", trackCursorPosition);
    let positionThumbTop = 0;
    // thumb movement interval
    const movementInterval = setInterval(() => {
      let thumbTop =
        thumb.getBoundingClientRect().top - track.getBoundingClientRect().top;

      if (
        positionThumbTop >= 0 &&
        positionThumbTop <= trackHeight - thumbHeight
      ) {
        if (currentCursorPosition > thumbTop + thumbHeight - 5) {
          positionThumbTop = thumbTop + 1;
          thumb.style.top = positionThumbTop + "px";
          hero.scrollTop = (positionThumbTop / thumbHeight) * heroHeight;
        }

        if (currentCursorPosition < thumbTop + 5) {
          positionThumbTop = thumbTop - 1;
          thumb.style.top = positionThumbTop + "px";
          hero.scrollTop = (positionThumbTop / thumbHeight) * heroHeight;
        }
      } else {
        clearInterval(movementInterval);
      }
    }, 0);

    //global mouseup handler for remove interval
    window.addEventListener("mouseup", () => {
      // remove interval
      clearInterval(movementInterval);
      window.removeEventListener("mousemove", trackCursorPosition);
    });
  };

  /*
   * tracks- mousedown event handler
   */
  track.addEventListener("mousedown", trackMouseDownHandler);

  /*
   * scroll content and position the thumb
   */
  hero.addEventListener("scroll", () => {
    // scroll-position into tracks thumb position
    thumb.style.top = (hero.scrollTop / heroHeight) * thumbHeight + "px";
  });

  /*
   * scroll auto
   */
  if (contentHeight < heroHeight) {
    track.style.display = "none";
  }
};

export default scrollScript;
