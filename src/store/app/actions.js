import { AppAction } from "./types";

export const showLiveChat = () => ({
  type: AppAction.SHOWLIVECHAT,
});

export const hideLiveChat = () => ({
  type: AppAction.HIDELIVECHAT,
});
