export const apiRoute = {
  LOGIN: '/system/auth/login',
  PROFILE: '/system/auth/profile',
  USER_ROLES: '/system/auth/roles',
  ACCOUNTS: '/accounts',
  ACCOUNT_ID: (id: number | string) => `/accounts/${id}`,
  ROLES: '/roles',
  ROLE_ID: (id: number | string) => `/roles/${id}`,
  PERMISSIONS: '/permissions',
  BRANCHES: '/branches',
  BRANCH_ID: (id: number | string) => `/branches/${id}`
}