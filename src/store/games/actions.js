import { GamesAction } from "./types";

export const setGamesData = (payload) => ({
  type: GamesAction.SET_GAMES_DATA,
  payload,
});
