import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Fragment, ReactNode } from 'react'
import ModalRoot from 'components/modals/ModalRoot'
import { ThemeProvider } from 'next-themes'
import { GlobalContextComponent } from 'lib/GlobalContext'
export { GlobalContext } from 'lib/GlobalContext'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const Layout =
    (
      Component as typeof Component & {
        layoutProps: {
          Layout: (props: { children: ReactNode } & unknown) => JSX.Element
        }
      }
    ).layoutProps?.Layout || Fragment
  
  return (
    <GlobalContextComponent>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Layout>
            <Component {...pageProps} />
          </Layout>
          
          <ModalRoot />
        </ThemeProvider>
      </QueryClientProvider>
    </GlobalContextComponent>
  )
}
export default MyApp
