import { header, headerGet, headerPut } from "./authHeader";
import axiosClient from "./axios";
import { BranchQueryReq, LoginReq, PostRoleReq, RoleQueryReq } from "./interface";
import { apiRoute } from "./_api_route";



class Api {
  login(body: LoginReq) {
    return axiosClient
      .post(apiRoute.LOGIN, body)
      .then(res => {
        return res.data
      })
  }
  profile() {
    return axiosClient
      .get(apiRoute.PROFILE, header())
      .then(res => res.data)
  }
  userRoles() {
    return axiosClient
      .get(apiRoute.USER_ROLES, header())
      .then(res => res.data)
  }
  accounts() {
    return axiosClient
      .get(apiRoute.ACCOUNTS, header())
      .then(res => res.data)
  }
  accountById(id: number | string) {
    return axiosClient
      .get(apiRoute.ACCOUNT_ID(id), header())
      .then(res => res.data)
  }
  putAccount(id: number | string, body: any) {
    return axiosClient
      .put(apiRoute.ACCOUNT_ID(id), body, header())
      .then(res => res.data)
  }
  roles(query?: RoleQueryReq) {
    return axiosClient
      .get(apiRoute.ROLES, headerGet(query))
      .then(res => res.data)
  }
  roleById(id: number | string) {
    return axiosClient
      .get(apiRoute.ROLE_ID(id), header())
      .then(res => res.data)
  }
  postRole(body: PostRoleReq) {
    return axiosClient
      .post(apiRoute.ROLES, body, header())
  }
  putRole(id: number, body: PostRoleReq) {
    return axiosClient
      .put(apiRoute.ROLE_ID(id), body, header())
      .then(res => res.data)
  }
  permissions() {
    return axiosClient
      .get(apiRoute.PERMISSIONS, header())
      .then(res => res.data)
  }
  branches(query?: BranchQueryReq) {
    return axiosClient
      .get(apiRoute.BRANCHES, headerGet(query))
      .then(res => res.data)
  }
  branchById(id: number | string) {
    return axiosClient
      .get(apiRoute.BRANCH_ID(id), header())
      .then(res => res.data)
  }
}

export const api = new Api()