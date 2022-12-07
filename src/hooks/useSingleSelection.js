const useSingleSelection = () => {
  const selectionHandler = (e) => {
    document.querySelectorAll("[aria-selected]").forEach((element) => {
      if (e.currentTarget === element) {
        if (element.ariaSelected === "false") {
          element.ariaSelected = "true";
          element.classList.add('track-list-main-bg')
          element.classList.remove('track-list-lighten-bg')
          console.log(element.classList)
        }else{
          element.classList.add('track-list-lighten-bg')
          element.classList.remove('track-list-main-bg')
          element.ariaSelected = "false";
        }
      } else {
        element.classList.remove('track-list-lighten-bg')
        element.classList.remove('track-list-main-bg')
        element.ariaSelected = "false";
      }
    });
  };

  return [selectionHandler];
};

export default useSingleSelection;
