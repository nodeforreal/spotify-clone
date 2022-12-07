import { useState, useEffect } from "react";
import { memoCallback } from "../Utils/memoCallback";

const useColumnCounts = () => {

  const getColumnCount = () => {
    const r = document.documentElement;
    const rs = getComputedStyle(r);
    return rs.getPropertyValue("--column-counts");
  };

  const [state, setState] = useState({
    columnCount: getColumnCount(),
    width: window.innerWidth,
    height: window.innerHeight,
  });


  useEffect(() => {
    // memoized callback
    const setColumnCount = memoCallback();

    // handler
    const resizeHandler = () => {
      const columnCount = getColumnCount();
      // callback,[dependencies]
      setColumnCount(() => {
        setState({
          columnCount: columnCount,
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, [columnCount]);
    };

    let observer = new ResizeObserver(resizeHandler)
    observer.observe(document.body)
    return () => {
      observer.unobserve(document.body)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...state };
};

export default useColumnCounts;
