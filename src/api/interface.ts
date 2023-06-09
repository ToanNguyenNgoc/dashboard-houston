export interface Page {
  page?: number | string;
  limit?: number | string
}
export interface LoginReq {
  email: string
  password: string
}
export interface ForgotPassReq {
  email: string
  code?: string
  new_password?: string
}
export interface PostRoleReq {
  title: string,
  description: string,
  permissions: number[]
}
export interface RoleQueryReq {
  is_super_admin?: boolean
}
export interface BranchQueryReq {
  page?: number | string,
  limit?: number | string,
  search?: string,
  status?: boolean
}
export interface BranchUpdateReq {
  name?: string,
  media_id?: 0,
  status?: true,
  address?: string,
  province_code?: 0,
  district_code?: 0,
  ward_code?: 0
}
export interface VillaCatePost {
  villa_cate_name: string,
  description: string,
  media_id?: number,
  branch_id: number
}
export interface VillaCatePut {
  villa_cate_name?: string,
  status?: boolean,
  description?: string,
  media_id?: number,
  branch_id?: number
}
export interface FoodCateReq {
  name?: string;
  description?: string;
  status?: boolean
}
export interface FoodReq {
  name?: string,
  description?: string,
  food_cate?: number | string,
  food_cate_id?: number | string,
  media?: number | string,
  status?: true
}
//
export interface VillaCateQuery {
  page?: number | string,
  limit?: number | string,
  search?: string,
  branch_id?: number | string | null,
  status?: boolean
}
export interface VillaQuery extends VillaCateQuery {
  min_price?: number,
  max_price?: number,
  sort_price?: '' | '-price' | 'price',
  includes?: '' | 'full_address'
}
export interface VillaIdQuery {
  includes?: 'category|branch|full_address' | ''
}
export interface MapPlaceQuery {
  search?: string,
  search_type: 'address' | 'coord'
}
export interface FoodCateQr extends Page {
  branch_id?: number | string | null,
  status?: boolean
}
export interface FoodQr extends Page {
  search?: string;
  branch_id?: number | string;
  food_cate_id?: number | string;
  status?: boolean
}
