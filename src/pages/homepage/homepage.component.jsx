import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";

import { fetchSectionsStart } from "../../redux/directory/directory.actions";

import Spinner from "../../components/spinner/spinner.component";

import { HomePageContainer } from "./homepage.styles";

const Directory = lazy(() =>
  import("../../components/directory/directory.component")
);

export const HomePage = ({ fetchSectionsStart }) => {
  useEffect(() => {
    fetchSectionsStart();
    console.log("fetch Homepage collection");
  }, [fetchSectionsStart]);

  return (
    <HomePageContainer>
      <Suspense fallback={<Spinner />}>
        <Directory />
      </Suspense>
    </HomePageContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchSectionsStart: () => dispatch(fetchSectionsStart())
});

export default connect(null, mapDispatchToProps)(HomePage);
