import { AxiosRequestConfig } from "axios"
import { key } from "./_key"

export const header = (
  contentType?: 'application/json' | 'multipart/form-data' | ''
): AxiosRequestConfig<any> => {
  const lsToken = localStorage.getItem(key.AUTH_LOCAL_STORAGE_KEY)
  return {
    headers: {
      "Authorization": `Bearer ${lsToken}`,
      "Content-Type": contentType ?? 'application/json'
    },
  }
}
export const headerGet = <T>(params: T): AxiosRequestConfig<any> => {
  const lsToken = localStorage.getItem(key.AUTH_LOCAL_STORAGE_KEY)
  return {
    params,
    headers: {
      "Authorization": `Bearer ${lsToken}`,
      "Content-Type": 'application/json'
    },
  }
}
export const headerPut = <T,>(body: T): AxiosRequestConfig<any> => {
  const lsToken = localStorage.getItem(key.AUTH_LOCAL_STORAGE_KEY)
  return {
    headers: {
      "Authorization": `Bearer ${lsToken}`,
      "Content-Type": 'application/json'
    },
    data: body
  }
}