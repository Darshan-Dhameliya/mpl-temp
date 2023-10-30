import { AxiosGet } from "../axioConsumer";

export const FetchAll = () => {
  return AxiosGet("games");
};
