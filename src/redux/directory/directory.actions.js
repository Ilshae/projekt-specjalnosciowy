import DirectoryActionTypes from "./directory.types";

import CategoriesService from "../../services/CategoriesService";

export const fetchSectionsStart = () => ({
  type: DirectoryActionTypes.FETCH_SECTIONS_START
});

export const fetchSectionsSuccess = SectionsMap => ({
  type: DirectoryActionTypes.FETCH_SECTIONS_SUCCESS,
  payload: SectionsMap
});

export const fetchSectionsFailure = errorMessage => ({
  type: DirectoryActionTypes.FETCH_SECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchSectionsStartAsync = () => {
  console.log("fetch homepage collections async");
  return dispatch => {
    dispatch(fetchSectionsStart());
    const SectionsMap = CategoriesService.getCategories()
      .then(response => {
        dispatch(fetchSectionsSuccess(response.data.sections));
      })
      .catch(error => {
        dispatch(fetchSectionsFailure(error.message));
      });
  };
};
