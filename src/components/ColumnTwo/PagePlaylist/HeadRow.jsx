import React,{useRef,useEffect,useState} from "react";
import SplitterLine from "../ColumnTwo/SplitterLine";
import { SIClockOutline } from "../../../assets/SpotifyIcons";
import styles from "./HeadRow.module.css";
import "./HeadRow.css";

const HeadRow = ({
  rowClass,
  trackTypeTitle,
  relDateTitle,
  dateAddedTitle,
}) => {
  const [state, setState] = useState({isSticky:false})

  const wrapperContainer = useRef(null)
  useEffect(() => {
    const handler = ()=>{
     console.log(wrapperContainer.current.getBoundingClientRect().top);
      if(wrapperContainer.current.getBoundingClientRect().top <= 64){
        setState({isSticky:true})
        console.log('true');
      }else{
        setState({isSticky:false})
        console.log('false');

      }
    }
    // event listener 
    window.addEventListener('wheel',handler)
    window.addEventListener('scroll',handler)
    return () => {
    window.removeEventListener('wheel',handler)
    window.removeEventListener('scroll',handler)
    }
  }, [])
  
  return (
    <div ref={wrapperContainer} className={`${styles.wrapper} ${state.isSticky && styles.stickyTopBarWrapper}`}>
      <div
        className={`${styles.sectionOne} ${rowClass}-sectionOne ${state.isSticky && styles.stickyTopBar}`}
      >
        <div className={styles.index} >
          <span>#</span>
        </div>
        <div className={styles.title} >
          <span>title</span>
        </div>

        <div
          className={`${styles.trackType} ${rowClass}-trackType`}
        >
          <span>{trackTypeTitle}</span>
        </div>

        <div
          className={`${styles.relDate} ${rowClass}-relDate`}
        >
          <span>{relDateTitle}</span>
        </div>

        <div
          className={`${styles.dateAdded} ${rowClass}-dateAdded`}
        >
          <span>{dateAddedTitle}</span>
        </div>

        <div className={styles.duration} >
          <span>
            <SIClockOutline />
          </span>
        </div>
      </div>
      <div className={styles.sectionTwo}>
        <SplitterLine />
      </div>
    </div>
  );
};

export default React.memo(HeadRow);
