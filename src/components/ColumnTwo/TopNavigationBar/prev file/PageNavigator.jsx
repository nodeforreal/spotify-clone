import React, { useRef } from 'react';

import { useLocation } from 'react-router-dom';

import {SIGoBack,SIGoForward} from '../../../assets/SpotifyIcons';

import styles from './PageNavigator.module.css';

const { wrapper, navigatorButton, buttonDisabled} = styles;


const PageNavigator = () =>{
  // session storage
  const storage = window.sessionStorage

  // for location changes
  useLocation();

  let historyLength = window.history.length-2;
  
  // from right position equivalent to history length(every link click)
  const fromRightPos = useRef(0);

  // if null set value in storage  else use previous.
  if(storage.getItem('fromRightPos') === null){
    storage.setItem('fromRightPos',fromRightPos.current)
  }else{
    fromRightPos.current = parseInt(storage.getItem('fromRightPos'))
  }

  // previous history length
  const hLPrev = useRef(0);

  // if null set value in storage  else use previous.
  if(storage.getItem('hLPrev') === null){
    storage.setItem('hLPrev',hLPrev.current)
  }else{
    hLPrev.current = parseInt(storage.getItem('hLPrev'))
    storage.setItem('hLPrev',hLPrev.current)
  }
  
  if(hLPrev.current !== historyLength){
    hLPrev.current = historyLength
    fromRightPos.current = historyLength
  }

  storage.setItem('fromRightPos',fromRightPos.current)
  
  storage.setItem('hLPrev',hLPrev.current)

  const buttonLogic = {
    forward: historyLength === 0 ? true : fromRightPos.current === historyLength ? true : false,
    backward: historyLength === 0 ? true : fromRightPos.current === 0 ? true : false
  }

  // go forward handler
  const goForward = ()=>{
    if(fromRightPos.current < historyLength){
      window.history.forward()
      storage.setItem('fromRightPos',fromRightPos.current+1)
    }
  }

  // go backward handler
  const goBackward = ()=>{
    if(fromRightPos.current > 0){
      window.history.back()
      console.log(fromRightPos.current );
      storage.setItem('fromRightPos',fromRightPos.current-1)

    }
  }
  
  return (
    <nav className={wrapper}>
      <NavigatorButton icon={<SIGoBack />} onClick={goBackward}  buttonLogic={buttonLogic.backward}/>
      <NavigatorButton icon={<SIGoForward />} onClick={goForward} buttonLogic={buttonLogic.forward}/>
    </nav>
  )
}

// button
const NavigatorButton = ({icon,onClick,buttonLogic}) => {

  return (
    <span className={ buttonLogic  ?  `${navigatorButton} ${buttonDisabled}` : navigatorButton } onClick={onClick}>
      {icon}
    </span>
  )
}


export default PageNavigator;