import useResizeTrigger from '../../../../hooks/useResizeTrigger';
import EpisodeShowCard from '../../Card/EpisodeShowCard';

import styles from "./ShelfCards.module.css";
const { wrapper } = styles;

const ShelfCards = ({cardList}) => {
  // eslint-disable-next-line no-unused-vars
  const resize = useResizeTrigger()
  const r = document.querySelector(':root')
  const rs =getComputedStyle(r)
  const cardCounts = rs.getPropertyValue('--column-counts')

  return (
    <div className={wrapper}>
      {
        cardList.slice(0,cardCounts).map((item,index)=>{
          return <EpisodeShowCard key={index}/>
        })
      }
    </div>
  );
};

export default ShelfCards;
