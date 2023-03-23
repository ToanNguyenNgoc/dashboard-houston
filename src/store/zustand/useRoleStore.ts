import { api } from "@/api";
import { key } from "@/constants";
import { encode } from "@/utils";
import { create } from "zustand";

export const useRolesStore = create((set) => ({
  roles: [],
  isSPA: false,
  fetchRole: async () => {
    const response = await api.userRoles()
    const codes: string[] = response.data?.map((role: any) => role.code)
    if (codes.includes(encode(key.SPA))) {
      set({ isSPA: true })
    }
    set({ roles: response?.data })
  },
  clearRoles: () => set({ roles: [], isSPA: false })
}))