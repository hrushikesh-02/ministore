import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  items: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        items: [...action.payload],
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: cartReducer,
});

export default cartReducer;
