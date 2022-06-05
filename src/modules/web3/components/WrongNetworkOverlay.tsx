import React from 'react'
import { NETWORK } from 'stores/networks'

import { useWeb3React } from '@web3-react/core'
import { ExclamationCircleIcon } from '@heroicons/react/outline'

export default function WrongNetworkOverlay() {
  const { active, chainId } = useWeb3React()
  const isWrongNetwork = NETWORK.getChainID() !== chainId
  const addNetworkParams = NETWORK.getAddNetworkParams()
  const switchNetworkParams = NETWORK.getSwitchNetworkParams()

  const show = active && isWrongNetwork

  if (!show) {
    return <></>
  }

  const addOrSwitchNetwork = async () => {
    const { ethereum } = window as any

    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [switchNetworkParams],
      })
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [addNetworkParams],
          });
        } catch (addError) {
          // handle "add" error
        }
      }
      // handle other "switch" errors
    }
  }

  return (
    <div className="absolute top-0 left-0 z-[500] w-screen h-screen bg-gray-200 dark:bg-gray-800">
      <div className="flex items-center justify-center w-full h-full overflow-auto">
        <div className="flex flex-col justify-center items-center">
          <ExclamationCircleIcon className="w-32 text-red-600" />

          <h1 className="mt-5 text-3xl">
            Change network selection
          </h1>
          <div className="mt-10 text-sm">
            Your wallet is connected to the wrong network.
          </div>
          <div className="text-sm">
            Please connect to{' '}
            <strong>{NETWORK.getHumanReadableNetworkName()}</strong> and
            try again.
          </div>
          {addNetworkParams !== undefined && (
            <button
              className="mt-5 p-2 text-lg font-bold text-brand-blue border border-brand-blue rounded-lg font-sf-compact-medium hover:bg-brand-blue hover:text-white"
              onClick={addOrSwitchNetwork}
            >
              Add or Switch Network
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
