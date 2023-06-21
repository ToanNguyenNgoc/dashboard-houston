import { header, headerGet } from "./authHeader";
import axiosClient from "./axios";
import {
  BranchQueryReq,
  BranchUpdateReq,
  FoodCateQr,
  FoodCateReq,
  ForgotPassReq,
  LoginReq,
  MapPlaceQuery,
  PostRoleReq,
  RoleQueryReq,
  VillaCatePost,
  VillaCatePut,
  VillaCateQuery,
  VillaIdQuery,
  VillaQuery
} from "./interface";
import { apiRoute } from "./_api_route";
import { FoodCate, ResponseDetail, ResponseList } from "@/interface";



class Api {
  login(body: LoginReq) {
    return axiosClient
      .post(apiRoute.LOGIN,
        body)
      .then(res => {
        return res.data
      })
  }
  profile() {
    return axiosClient
      .get(apiRoute.PROFILE, header())
      .then(res => res.data)
  }
  putProfile(body: any) {
    return axiosClient
      .put(apiRoute.PROFILE, body, header())
      .then(res => res.data)
  }
  userRoles() {
    return axiosClient
      .get(apiRoute.USER_ROLES, header())
      .then(res => res.data)
  }
  forgot(body: ForgotPassReq) {
    return axiosClient
      .post(apiRoute.SYS_FORGOT, body)
      .then(res => res.data)
  }
  userBranch() {
    return axiosClient
      .get(apiRoute.USER_BRANCH, header())
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
  postAccount(body: any) {
    return axiosClient
      .post(apiRoute.ACCOUNTS, body, header())
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
  putBranch(id: number | string, body: BranchUpdateReq) {
    return axiosClient
      .put(apiRoute.BRANCH_ID(id), body, header())
      .then(res => res.data)
  }
  uploadImage(file: any) {
    return axiosClient
      .post(apiRoute.MEDIA, file, header('multipart/form-data'))
      .then(res => res.data)
  }
  provinces() {
    return axiosClient
      .get(apiRoute.PROVINCES)
      .then(res => res.data)
  }
  districts(province_code: number | string) {
    return axiosClient
      .get(apiRoute.DISTRICTS(province_code))
      .then(res => res.data)
  }
  wards(district_code: number | string) {
    return axiosClient
      .get(apiRoute.WARDS(district_code))
      .then(res => res.data)
  }
  villaCates(query: VillaCateQuery) {
    return axiosClient
      .get(apiRoute.VILLA_CATES, headerGet(query))
      .then(res => res.data)
  }
  villaCateById(id: number | string) {
    return axiosClient
      .get(apiRoute.VILLA_CATE_ID(id))
      .then(res => res.data)
  }
  postVillaCate(body: VillaCatePost) {
    return axiosClient
      .post(apiRoute.VILLA_CATES, body, header())
      .then(res => res.data)
  }
  putVillaCate(id: number | string, body: VillaCatePut) {
    return axiosClient
      .put(apiRoute.VILLA_CATE_ID(id), body, header())
      .then(res => res.data)
  }
  deleteVillaCate(id: number | string) {
    return axiosClient
      .delete(apiRoute.VILLA_CATE_ID(id), header())
      .then(res => res.data)
  }
  villa(params: VillaQuery) {
    return axiosClient
      .get(apiRoute.VILLAS, { params })
      .then(res => res.data)
  }
  villaById(id: number | string, params?: VillaIdQuery) {
    return axiosClient
      .get(apiRoute.VILLA_ID(id), { params })
      .then(res => res.data)
  }
  mapPlaces(params: MapPlaceQuery) {
    return axiosClient
      .get(apiRoute.MAP_PLACES, { params })
      .then(res => res.data)
  }
  foodCates(qr: FoodCateQr) {
    return axiosClient
      .get(apiRoute.FOOD_CATES, { params: qr })
      .then<ResponseList<FoodCate[]>>(res => res.data)
  }
  foodCate(id: number | string) {
    return axiosClient.get(apiRoute.FOOD_CATE_ID(id)).then<ResponseDetail<FoodCate>>(res => res.data)
  }
  postFoodCate(body: FoodCateReq) {
    return axiosClient.post(apiRoute.FOOD_CATES, body)
  }
  putFoodCate(id: number | string, body: FoodCateReq) {
    return axiosClient.put(apiRoute.FOOD_CATE_ID(id), body)
  }
}

export const api = new Api()