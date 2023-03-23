import { key } from "./_key"

const lsToken = localStorage.getItem(key.AUTH_LOCAL_STORAGE_KEY)
export const qrKey = {
  roles_page: `ROLES_PAGE_${lsToken}`,
  permissions_page: `PERMISSIONS_PAGE_${lsToken}`
}