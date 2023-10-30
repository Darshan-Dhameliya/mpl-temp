import { AppAction } from "./types";

const initialState = {
  showLiveChat: false,
  showDeposit: false,
  showWithdraw: false,
  games: [],
  banners: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppAction.SHOWLIVECHAT:
      return { ...state, showLiveChat: true };
    case AppAction.HIDELIVECHAT:
      return { ...state, showLiveChat: false };

    case AppAction.SHOWDEPOSIT:
      return { ...state, showDeposit: true };
    case AppAction.HIDEDEPOSIT:
      return { ...state, showDeposit: false };

    case AppAction.SHOWWITHDRAW:
      return { ...state, showWithdraw: true };
    case AppAction.HIDEWITHDRAW:
      return { ...state, showWithdraw: false };

    case AppAction.SET_GAMES_DATA: {
      return { ...state, games: action.payload || [] };
    }

    case AppAction.SET_BANNERS_DATA: {
      return { ...state, banners: action.payload || [] };
    }

    default:
      return state;
  }
};
