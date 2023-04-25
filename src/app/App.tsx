import AppProvider from '@/context/AppProvider'
import { useRolesStore } from '@/store/zustand'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { I18nProvider } from '../_metronic/i18n/i18nProvider'
import { LayoutProvider, LayoutSplashScreen } from '../_metronic/layout/core'
import { MasterInit } from '../_metronic/layout/MasterInit'
import { AuthInit } from './modules/auth'
import moment from 'moment'



const App = () => {
  const [roles] = useRolesStore((state: any) => [state.roles])
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <AppProvider>
              <Outlet />
              <MasterInit />
            </AppProvider>
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export { App }
