import { toast } from "react-toastify";
import { AxiosPost } from "../axioConsumer";
import { getBrowserType } from "../helper";

export const login = async (dto) => {
  dto["browser"] = getBrowserType();
  dto["device"] = getBrowserType();
  const { data, message } = await AxiosPost("auth/login", dto);
  toast.success(message);
  return data;
};

export const register = (data) => {
  return AxiosPost("auth/signup", data);
};
