import React,{useState} from 'react'

import SectionTop from './SectionTop';
import SectionBottom from './SectionBottom';

import styles from './PageFindSomeThing.module.css'

const PageFindSomeThing = () => {
  const [findingWay, setChangeView] = useState(true)

  const handleViewToggle= ()=>{
    setChangeView(!findingWay)
  }

  return (
    <section className={styles.wrapper}>
      <SectionTop clickHandler={handleViewToggle} changeView={findingWay} />
      <SectionBottom findingWay={findingWay}/>
    </section>
  )
}

export default PageFindSomeThing;