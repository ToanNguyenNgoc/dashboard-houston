export interface LoginReq {
  email: string
  password: string
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
  status?:boolean
}