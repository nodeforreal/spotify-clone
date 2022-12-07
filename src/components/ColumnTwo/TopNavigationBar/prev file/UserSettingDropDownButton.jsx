import React,{useState} from 'react';
import DropDownMenu from './DropDownMenu';

import {SIProfileAvatar,SIArrowDown,SIArrowUp} from '../../../assets/SpotifyIcons'
import styles from './UserSettingDropDownButton.module.css';

const {active,  wrapper, userAvatar, userName, dropDownArrow } = styles;

const UserSettingDropDownButton = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
   <section className={isOpen ? `${active} ${wrapper}` : wrapper} onClick={()=>{setIsOpen(!isOpen)}}>
     <div className={userAvatar}>
     {true ? <SIProfileAvatar/>: <SIProfileAvatar/>}
     </div>
     <span className={userName}>
        kaliyamoorthy kaliyamoorthy
     </span>
     <span className={dropDownArrow} >
        {isOpen ?  <SIArrowUp /> : <SIArrowDown />}
     </span>

     <DropDownMenu isOpen={isOpen}/>
   </section>
  )
}

export default UserSettingDropDownButton ;