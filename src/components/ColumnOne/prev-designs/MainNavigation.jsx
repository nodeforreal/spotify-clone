import React from 'react';
import {Link } from 'react-router-dom';
import useMatchPath from '../../hooks/useMatchPath';

import menuItems from './data/mainNavigationData';
import styles from './MainNavigation.module.css';
const {navigationMenu,menuItem,menuIcon,menuText,activeIcon,activeText} = styles ;

const MainNavigation = () => {

  
  const {pathName} = useMatchPath()
 
  const menuList = menuItems.map((item)=>{
    const {id,path} = item
    const isActive=(path === pathName)
    return (
      <MenuItem key={id}  isActive={isActive} {...item}/>
    )
  })
  
  return (
    <section className={navigationMenu}>
      {menuList}
    </section>
  )
}

// menu item
const MenuItem = ({iconNormal,iconActive,text,isActive,path}) => {
  
  return (
    <Link to={path} className={menuItem}>
      <span className={isActive ? activeIcon : menuIcon}>
        {isActive ? iconActive : iconNormal}
      </span>
      <span className={ isActive ? activeText : menuText}>
        {text}
      </span>
    </Link>
  )
}

export default MainNavigation ;