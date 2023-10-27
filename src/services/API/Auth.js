import { toast } from "react-toastify";
import { AxiosHeaderGet, AxiosPost } from "../axioConsumer";
import { getBrowserType } from "../helper";

export const login = async (dto) => {
  dto["browser"] = getBrowserType();
  dto["device"] = getBrowserType();
  const { data, message } = await AxiosPost("auth/login", dto);
  localStorage.setItem("AuthToken", data?.token);
  toast.success(message);
  return data;
};

export const register = (data) => {
  return AxiosPost("auth/signup", data);
};

export const me = () => {
  return AxiosHeaderGet("auth/me");
};
