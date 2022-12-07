import {
  SIHomeOutline,
  SIHomeFill,
  SISearchOutline,
  SISearchFill,
  SILibraryOutline,
  SILibraryFill
} from '../../../assets/SpotifyIcons';

// main navigation
const menuItems =[
  {
    id:1,
    path:'/',
    text:'Home',
    iconNormal:<SIHomeOutline />,
    iconActive: <SIHomeFill />
  },
  {
    id:2,
    path:'/search',
    text:'Search',
    iconNormal:<SISearchOutline />,
    iconActive: <SISearchFill />
  },
  {
    id:3,
    path:'/collection/playlists',
    text:'Library',
    iconNormal:<SILibraryOutline />,
    iconActive: <SILibraryFill />
  }
]

export default menuItems;