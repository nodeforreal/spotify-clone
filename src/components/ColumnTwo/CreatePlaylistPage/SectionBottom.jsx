import React, { useState } from "react";

import FindByRecommend from "./SectionBottom/FindByRecommend";
import FindBySearch from "./SectionBottom/FindBySearch";

import SingleNested from "./SectionBottom/SingleNested";
import ArtistNested from "./SectionBottom/ArtistNested";

import styles from "./SectionBottom.module.css";

const SectionBottom = ({findingWay}) => {
  const [state, setState] = useState({
    view: "bySearch",
    viewIndex: 0,
  });
  console.log(state.viewIndex);
  const handleViews = (_currentView) => {
    setState({
      ..._currentView,
    });
  };

  const handleGoBack = (_currentView) => {
    setState({
      ...state,
      viewIndex: state.viewIndex - 1,
    });
  };

  const sectionView = {
    mainView: [
      {
        nestLevel: 0,
        component: <FindBySearch handleViews={handleViews} />,
        id: 0,
      },
    ],
    albumsView: [
      {
        nestLevel: 0,
        component: <FindBySearch handleViews={handleViews} />,
        id: 0,
      },
      {
        nesting: 1,
        component: <SingleNested handleGoBack={handleGoBack} />,
      },
    ],
    artistView: [
      {
        nestLevel: 0,
        component: <FindBySearch handleViews={handleViews} />,
      },
      {
        nestLevel: 1,
        component: <ArtistNested handleGoBack={handleGoBack} handleViews={handleViews}/>,
      },
      {
        nestLevel: 2,
        component: <SingleNested handleGoBack={handleGoBack} />,
      },
    ],
    allArtistsView: [
      {
        nestLevel: 0,
        component: <FindBySearch handleViews={handleViews} />,
      },
      {
        nestLevel: 1,
        component: <SingleNested handleViews={handleViews } handleGoBack={handleGoBack}/>,
        id: 1,
      },
      {
        nestLevel: 2,
        component: <ArtistNested handleViews={handleViews } handleGoBack={handleGoBack}/>,
        id: 2,
      },
      {
        nestLevel: 3,
        component: <SingleNested handleGoBack={handleGoBack}/>,
        id: 3,
      },
    ],
  };

  return (
    <section className={styles.wrapper}>
      {
        !findingWay && <FindByRecommend />
      }

      {findingWay && state.view === "bySearch" &&
        sectionView.mainView[state.viewIndex].component}
      {findingWay && state.view === "albumsView" &&
        sectionView.albumsView[state.viewIndex].component}
      {findingWay && state.view === "artistView" && sectionView.artistView[state.viewIndex].component}
      {findingWay && state.view === "allArtistsView" && sectionView.allArtistsView[state.viewIndex].component}
    </section>
  );
};

export default SectionBottom;
