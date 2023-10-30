import { AppAction } from "./types";

export const showLiveChat = () => ({
  type: AppAction.SHOWLIVECHAT,
});

export const hideLiveChat = () => ({
  type: AppAction.HIDELIVECHAT,
});

export const setGamesData = (payload) => ({
  type: AppAction.SET_GAMES_DATA,
  payload,
});

export const setBannerData = (payload) => ({
  type: AppAction.SET_BANNERS_DATA,
  payload,
});
