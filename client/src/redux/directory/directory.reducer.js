export const INITIAL_STATE = {
  sections: [
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/J32zjQV/womens.png",
      id: 1,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/Q9kcXrN/mens.png",
      id: 2,
      linkUrl: "shop/mens",
    },
    {
      title: "kids",
      imageUrl: "https://i.ibb.co/26YNQbG/kids.png",
      id: 3,
      linkUrl: "shop/kids",
    },
    {
      title: "pregnancy",
      imageUrl: "https://i.ibb.co/kMc8dW7/pregnancy.png",
      id: 4,
      linkUrl: "shop/pregnancy",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/7QC9Bdb/jackets.png",
      id: 5,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/n8GjNJR/sneakers.png",
      id: 6,
      linkUrl: "shop/sneakers",
    },
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 7,
      linkUrl: "shop/hats",
    },
    {
      title: "watches",
      imageUrl: "https://i.ibb.co/xgQByt5/accesories.png",
      id: 8,
      linkUrl: "shop/watches",
    },
    {
      title: "jewelry",
      imageUrl: "https://i.ibb.co/10LbRR2/jewelry.png",
      id: 9,
      linkUrl: "shop/jewelry",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
