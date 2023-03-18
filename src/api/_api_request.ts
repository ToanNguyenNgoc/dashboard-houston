import axiosClient from "./axios";
import { LoginReq } from "./interface";
import { apiRoute } from "./_api_route";
import { key } from "./_key";


class Api {
  login(body: LoginReq) {
    return axiosClient
      .post(apiRoute.LOGIN, body)
      .then(res => {
        return res.data
      })
  }
  profile(token?: string) {
    const lsToken = localStorage.getItem(key.AUTH_LOCAL_STORAGE_KEY)
    return axiosClient
      .get(apiRoute.PROFILE, {
        headers: { Authorization: `Bearer ${token ?? lsToken}` }
      })
      .then(res => res.data)
  }
}

export const api = new Api()