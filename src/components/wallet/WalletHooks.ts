import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { setWeb3 } from 'stores/WalletStore'

import { injected, connectorsById } from './Connectors'
import { useCeramicStore } from 'stores/ceramicStore'
import CeramicClient from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import ThreeIdProvider from '3id-did-provider'
import { getResolver as getKeyResolver } from 'key-did-resolver'
import { getResolver as get3IDResolver } from '@ceramicnetwork/3id-did-resolver'

export function useEagerConnect() {
  const { activate, active, library } = useWeb3React()
  const setCeramic = useCeramicStore((state: any) => state.setCeramic)

  const [tried, setTried] = useState(false)

  useEffect(() => {
    let isCancelled = false

    // async function connectToDID() {
    //   const ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com")
    //   const threeID = await ThreeIdProvider.create({
    //     authId: 'shmojiAuthID1',
    //     authSecret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    //     // See the section above about permissions management
    //     getPermission: (request) => Promise.resolve(request.payload.paths),
    //   } as any)

    //   const did = new DID({
    //     provider: threeID.getDidProvider(),
    //     resolver: {
    //       ...get3IDResolver(ceramic),
    //       ...getKeyResolver(),
    //     },
    //   })
    
    //   // Authenticate the DID using the 3ID provider
    //   await did.authenticate()
      
    //   ceramic.setDID(did)
    //   setCeramic(ceramic) // Make sure to set this AFTER authenticating
    // }

    async function run() {
      const walletStr = localStorage.getItem('WALLET_TYPE')
      // If connected before, connect back
      if (walletStr) {
        const previousConnector = connectorsById[parseInt(walletStr)]
        if (
          previousConnector.isAuthorized &&
          (await previousConnector.isAuthorized())
        ) {
          if (isCancelled) {
            return
          }

          activate(previousConnector).catch(() => {
            setTried(true)
          })
        }
      }
    }

    run()
    // connectToDID()  // Connect central app DID once at beginning of page load

    return () => {
      isCancelled = true
    }
  }, [])

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setWeb3(library, undefined)
      setTried(true)
    }
  }, [tried, active, library])

  return tried
}

export function useInactiveListener(suppress: boolean = false) {
  const { active, error, activate } = useWeb3React()

  useEffect((): any => {
    const { ethereum } = window as any
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        activate(injected)
      }
      const handleChainChanged = (chainId: string | number) => {
        activate(injected)
      }
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          activate(injected)
        }
      }
      const handleNetworkChanged = (networkId: string | number) => {
        activate(injected)
      }

      ethereum.on('connect', handleConnect)
      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)
      ethereum.on('networkChanged', handleNetworkChanged)

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect)
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
          ethereum.removeListener('networkChanged', handleNetworkChanged)
        }
      }
    }
  }, [active, error, suppress, activate])
}
