import axios from "axios";

export const BASEURL = {
  ENDPOINT_URL: "http://44.201.249.76:5010/",
};

const http = axios.create({
  baseURL: `${BASEURL.ENDPOINT_URL}api/web/`,
});

export const AxiosGet = (url) => http.get(url);
export const AxiosPost = (url, data) => http.post(url, data);

export const AxiosHeaderGet = (url) => {
  const token = localStorage.getItem("AuthToken");
  return http.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const AxiosHeaderPost = (url, data) => {
  const token = localStorage.getItem("AuthToken");
  return http.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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
