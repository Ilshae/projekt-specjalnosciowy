import { takeLatest, call, put, all } from "redux-saga/effects";

import CategoriesService from "../../services/CategoriesService";

import {
  fetchSectionsSuccess,
  fetchSectionsFailure
} from "./directory.actions";

import DirectoryActionTypes from "./directory.types";

export function* fetchSectionsAsync() {
  try {
    const SectionsRef = yield CategoriesService.getCategories();
    yield put(fetchSectionsSuccess(SectionsRef.data));
  } catch (error) {
    yield put(fetchSectionsFailure(error.message));
  }
}

export function* fetchSectionsStart() {
  yield takeLatest(
    DirectoryActionTypes.FETCH_SECTIONS_START,
    fetchSectionsAsync
  );
}

export function* directorySagas() {
  yield all([call(fetchSectionsStart)]);
}
