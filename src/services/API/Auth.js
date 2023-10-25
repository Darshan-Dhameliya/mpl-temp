import axios from "axios";
import { AxiosPost } from "../axioConsumer";
import { getBrowserType } from "../helper";

export const login = async (data) => {
  data["browser"] = getBrowserType();
  data["device"] = getBrowserType();
  try {
    const { data: ipdata } = await axios.get("https://api.myip.com/");
    data["ip"] = ipdata.ip;
    data["locationCountry"] = ipdata.cc;
    return AxiosPost("auth/login", data);
  } catch (error) {
    return AxiosPost("auth/login", data);
  }
};

export const register = (data) => {
  return AxiosPost("auth/register", data);
};
