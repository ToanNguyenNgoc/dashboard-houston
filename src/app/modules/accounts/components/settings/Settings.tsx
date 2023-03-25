import { useProfileStore } from '@/store/zustand'
import { StoreProfile } from '@/store/zustand/models'
import React from 'react'
import { ProfileDetails } from './cards/ProfileDetails'
import { SignInMethod } from './cards/SignInMethod'
// import {ConnectedAccounts} from './cards/ConnectedAccounts'
// import {EmailPreferences} from './cards/EmailPreferences'
// import {Notifications} from './cards/Notifications'
// import {DeactivateAccount} from './cards/DeactivateAccount'

export function Settings() {
  const [profile] = useProfileStore((state: StoreProfile) => [state.profile])
  return (
    <>
      {
        profile &&
        <>
          <ProfileDetails profile={profile} />
          <SignInMethod />
        </>
      }
      {/* <ConnectedAccounts />
      <EmailPreferences />
      <Notifications />
      <DeactivateAccount /> */}
    </>
  )
}
