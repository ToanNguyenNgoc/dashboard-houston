import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const AccountBranch = lazy(() => import('@/app/modules/accounts/AccountBranch'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const AccountsPage = lazy(() => import('@/app/modules/apps/accounts'))
  const AccountForm = lazy(() => import('@/app/modules/apps/accounts/pages/AccountForm'))
  const RolesPage = lazy(() => import('@/app/modules/apps/roles'))
  const RoleForm = lazy(() => import('@/app/modules/apps/roles/pages/RoleForm'))
  const PermissionsPage = lazy(() => import('@/app/modules/apps/permissions'))
  const VillaCatePage = lazy(() => import('@/app/modules/villa/villa_cates'))
  const VillaPage = lazy(() => import('@/app/modules/villa/villas'))
  const VillaForm = lazy(() => import('@/app/modules/villa/villas/VillaForm'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        {/* <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        /> */}
        <Route
          path='villa_cates/*'
          element={
            <Suspense>
              <VillaCatePage />
            </Suspense>
          }
        />
        <Route
          path='villas/*'
          element={
            <Suspense>
              <VillaPage />
            </Suspense>
          }
        />
        <Route
          path='villas/form'
          element={
            <Suspense>
              <VillaForm />
            </Suspense>
          }
        />
        <Route
          path='villas/form/:id'
          element={
            <Suspense>
              <VillaForm />
            </Suspense>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/profile/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/branch/*'
          element={
            <SuspensedView>
              <AccountBranch />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/accounts'
          element={
            <SuspensedView>
              <AccountsPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/accounts/form'
          element={
            <SuspensedView>
              <AccountForm />
            </SuspensedView>
          }
        />
        <Route
          path='apps/accounts/form/:id'
          element={
            <SuspensedView>
              <AccountForm />
            </SuspensedView>
          }
        />
        <Route
          path='apps/roles'
          element={
            <SuspensedView>
              <RolesPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/roles/form'
          element={
            <SuspensedView>
              <RoleForm />
            </SuspensedView>
          }
        />
        <Route
          path='apps/roles/form/:id'
          element={
            <SuspensedView>
              <RoleForm />
            </SuspensedView>
          }
        />
        <Route
          path='apps/permissions/*'
          element={
            <SuspensedView>
              <PermissionsPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
