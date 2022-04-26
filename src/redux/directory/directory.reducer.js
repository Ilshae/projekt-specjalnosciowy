import DirectoryActionTypes from "./directory.types";

export const INITIAL_STATE = {
  sections: [
    {
      title: "womens",
      image: "https://i.ibb.co/J32zjQV/womens.png",
      id: 1,
      linkUrl: "shop/womens"
    }
  ],
  isFetching: false,
  errorMessage: undefined
  /*,
   {
      title: "mens",
      image: "https://i.ibb.co/Q9kcXrN/mens.png",
      id: 2,
      linkUrl: "shop/mens"
    },
    {
      title: "kids",
      image: "https://i.ibb.co/26YNQbG/kids.png",
      id: 3,
      linkUrl: "shop/kids"
    },
    {
      title: "pregnancy",
      image: "https://i.ibb.co/kMc8dW7/pregnancy.png",
      id: 4,
      linkUrl: "shop/pregnancy"
    },
    {
      title: "jackets",
      image: "https://i.ibb.co/7QC9Bdb/jackets.png",
      id: 5,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      image: "https://i.ibb.co/n8GjNJR/sneakers.png",
      id: 6,
      linkUrl: "shop/sneakers"
    },
    {
      title: "hats",
      image: "https://i.ibb.co/cvpntL1/hats.png",
      id: 7,
      linkUrl: "shop/hats"
    },
    {
      title: "watches",
      image: "https://i.ibb.co/xgQByt5/accesories.png",
      id: 8,
      linkUrl: "shop/watches"
    },
    {
      title: "jewelry",
      image: "https://i.ibb.co/10LbRR2/jewelry.png",
      id: 9,
      linkUrl: "shop/jewelry"
    }
  ]*/
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DirectoryActionTypes.FETCH_SECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case DirectoryActionTypes.FETCH_SECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sections: action.payload
      };
    case DirectoryActionTypes.FETCH_SECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default directoryReducer;
