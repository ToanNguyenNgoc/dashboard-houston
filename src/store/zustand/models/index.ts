import { Profile } from "@/interface"

export type StoreProfile = {
  profile: Profile | null,
  onSetProfile: (profile: Profile) => void,
  onUpdateProfile: (payload:any) => void
}