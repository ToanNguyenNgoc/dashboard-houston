import { api } from "@/api";
import { useProfileStore } from "@/store/zustand";
import { StoreProfile } from "@/store/zustand/models";
import { createContext, useEffect, useState } from "react";

export type AppContextType = {
  branch: any,
  setBranch: any
};

export const AppContext = createContext<AppContextType | null>(null);

export default function AppProvider({ children }: any) {
  const [profile] = useProfileStore((state: StoreProfile) => [state.profile])
  const [branch, setBranch] = useState({})
  const handleGetUserBranch = async () => {
    try {
      const branchRes = await api.userBranch()
      setBranch(branchRes?.data[0])
    } catch (error) {

    }
  }
  useEffect(() => {
    if (profile) {
      handleGetUserBranch()
    }
  }, [profile])
  const value = {
    branch,
    setBranch
  };
  return <AppContext.Provider value={value} > {children} </AppContext.Provider>;
}