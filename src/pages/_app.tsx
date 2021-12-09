import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment, ReactNode } from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import Web3ReactManager from 'components/wallet/Web3ReactManager'
import ModalRoot from 'components/modals/ModalRoot'
import { ThemeProvider } from 'next-themes'
// import { WrongNetworkOverlay } from 'components'

function getLibrary(provider: any): Web3 {
  return new Web3(provider)
}

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
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ReactManager>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Web3ReactManager>
        {/* <WrongNetworkOverlay /> */}
        <ModalRoot />
      </Web3ReactProvider>
    </ThemeProvider>
  )
}
export default MyApp
