import ReactDOM from 'react-dom/client'
import axios from 'axios'
import { Chart, registerables } from 'chart.js'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { MetronicI18nProvider } from './_metronic/i18n/Metronici18n'
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.react.scss'
import { AppRoutes } from './app/routing/AppRoutes'
import { AuthProvider, setupAxios } from './app/modules/auth'
import '@/_metronic/assets/sass/_root.scss'
setupAxios(axios)
Chart.register(...registerables)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <MetronicI18nProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </MetronicI18nProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  // </React.StrictMode>,
)
