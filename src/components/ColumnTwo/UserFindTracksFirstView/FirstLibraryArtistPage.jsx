import FindTracksTemplate from "../FindTracksTemplate/FindTracksTemplate";

import { SIArtist } from "../../../assets/SpotifyIcons";

import styles from "./FirstLibraryArtistPage.module.css";
const { wrapper } = styles;

const FirstLibraryArtistPage = () => {
  return (
    <div className={wrapper}>
      <FindTracksTemplate
        svg={<SIArtist />}
        title={"Follow your first artist"}
        subPara={"Follow artists you like by tapping the follow button."}
        path={"/search"}
        labelText={"Find artists"}
      />
    </div>
  );
};

export default FirstLibraryArtistPage;
