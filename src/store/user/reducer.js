import { UserAction } from "./types";

const initialState = {
  isloggedIn: false,
  token: "",
  data: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserAction.SET_USER_DATA: {
      state = action.payload || {};
      state.isloggedIn = true;
      return { ...state };
    }
    case UserAction.UPDTAE_USER_DATA: {
      const data = action.payload;
      if (typeof data.grade === "string") {
        delete data.grade;
      }
      state.data = { ...state.data, data };
      return { ...state };
    }

    case UserAction.SET_USER_AFTER_UPDATE: {
      const data = action.payload;
      Object.assign(state, data);
      return { ...state };
    }

    case UserAction.CLEAN_UP_USER: {
      return { isloggedIn: false, data: {}, token: "", courses: [], order: [] };
    }

    default:
      return state;
  }
};
