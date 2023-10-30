import { GamesAction } from "./types";

const initialState = {
  all: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GamesAction.SET_GAMES_DATA: {
      return { ...state, all: action.payload || [] };
    }

    case GamesAction.CLEAN_UP_USER: {
      return { all: [] };
    }

    default:
      return state;
  }
};
