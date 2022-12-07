import { useState, useEffect } from "react";

const useResizeTrigger = () => {
  const [sizes, setSizes] = useState({ width: 0, height: 0 });

  useEffect(() => {

    const resizeHandler = function (){
      // setSizes({
      //   width: window.innerWidth,
      //   height: window.innerHeight,
      // });
    }

    // event - resize
   

    // remove handler
    return () => {
   
    };
  }, []);

  return { ...sizes };
};

export default useResizeTrigger;
