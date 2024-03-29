import ShopActionTypes from "./shop.types";

import ProductService from "../../services/ProductService";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  console.log("fetch collections start async");
  return dispatch => {
    dispatch(fetchCollectionsStart());
    const collectionsMap = ProductService.getProducts()
      .then(response => {
        console.log("payload collections: ", response.data);
        dispatch(fetchCollectionsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};
