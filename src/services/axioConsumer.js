import axios from "axios";
import { toast } from "react-toastify";

export const BASEURL = {
  ENDPOINT_URL: "http://44.201.249.76:5010/",
};

const http = axios.create({
  baseURL: `${BASEURL.ENDPOINT_URL}api/web/`,
});

export const AxiosGet = async (url) => {
  try {
    const { data } = await http.get(url);
    return data;
  } catch (error) {
    return error;
  }
};
export const AxiosPost = async (url, parmas) => {
  try {
    const { data } = await http.post(url, parmas);
    return data;
  } catch (error) {
    console.log(error);
    toast.warning(error?.response?.data?.message || error?.message);
  }
};

export const AxiosHeaderGet = async (url) => {
  try {
    const token = localStorage.getItem("AuthToken");
    const { data } = await http.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const AxiosHeaderPost = async (url, dto) => {
  const token = localStorage.getItem("AuthToken");
  try {
    const { data } = await http.post(url, dto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

// export const AxiosHeaderPatch = async (url, data, isFormData = false) => {
//   const token = await AsyncStorage.getItem("AuthToken");
//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };
//   if (isFormData) {
//     headers["Content-Type"] = "multipart/form-data";
//   }
//   return http.patch(url, data, {
//     headers,
//   });
// };
