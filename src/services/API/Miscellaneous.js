import { AxiosGet } from "../axioConsumer";

export const FetchBanners = () => {
  return AxiosGet("banners");
};
