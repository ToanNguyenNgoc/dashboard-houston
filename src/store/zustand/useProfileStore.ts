import { Profile } from '@/interface'
import { create } from 'zustand'
import { StoreProfile } from './models'

export const useProfileStore = create<StoreProfile>((set) => ({
  profile: null,
  onSetProfile: (payload: Profile) => {
    set({ profile: payload })
  },
  onUpdateProfile: (payload) => {
    set((state) => ({ profile: { ...state.profile, ...payload } }))
  }
}))