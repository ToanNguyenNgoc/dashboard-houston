import axios from "axios";
import queryString from "query-string";
import moment from "moment";
import { encode } from "@/utils";
import { key } from "@/api/_key";

export const offset = import.meta.env.VITE_REACT_APP_OFFSET_LIVE
export const baseURL = import.meta.env.VITE_REACT_APP_API_URL_LIVE
// export const baseURL = import.meta.env.VITE_REACT_APP_API_URL_DEV
// export const offset = import.meta.env.VITE_REACT_APP_OFFSET_DEV


const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "x-api-key": encode(moment().utcOffset(parseInt(offset)).format(import.meta.env.VITE_REACT_APP_X_API_KEY))
  },
  paramsSerializer: {
    encode: (param: string) => { },
    serialize: (params) => queryString.stringify(params),
    indexes: false,
  },
});
axiosClient.interceptors.request.use(async (config) => {
  const lsToken = localStorage.getItem(key.AUTH_LOCAL_STORAGE_KEY)
  config.headers['Authorization'] = `Bearer ${lsToken}`
  return config;
});
axios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
