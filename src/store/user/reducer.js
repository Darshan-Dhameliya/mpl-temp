import { UserAction } from "./types";

const initialState = {
  isloggedin: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserAction.SET_USER_DATA: {
      if (action.payload) {
        state = action.payload;
        state.isloggedin = true;
      }
      return { ...state };
    }
    // case UserAction.UPDTAE_USER_DATA: {
    //   const data = action.payload;
    //   if (typeof data.grade === "string") {
    //     delete data.grade;
    //   }
    //   state.data = { ...state.data, data };
    //   return { ...state };
    // }

    case UserAction.CLEAN_UP_USER: {
      return { isloggedin: false };
    }

    default:
      return state;
  }
};
