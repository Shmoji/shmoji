import classNames from 'classnames'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Modal from '../modals/Modal'
import CeramicClient from '@ceramicnetwork/http-client'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect'
import { DID } from 'dids'
import { useWeb3React } from '@web3-react/core'
import { useCeramicStore } from 'stores/ceramicStore'
import useDID from './useDID'
import CircleSpinner from '../animations/CircleSpinner'

const endpoint = "https://ceramic-clay.3boxlabs.com"

const NoSSRWalletInterface = dynamic(() => import('./WalletInterface'), {
  ssr: false,
})

export default function LoginModal({ close }: { close: () => void }) {
  const [step, setStep] = useState(1)
  const { account, active } = useWeb3React()
  const ceramic = useCeramicStore((state: any) => state.ceramic)
  const setCeramic = useCeramicStore((state: any) => state.setCeramic)
  const isDIDActive = useDID()
  const [isLoading, setIsLoading] = useState(false)

  const connectToDID = async () => {
    setIsLoading(true)
    const ceramic = new CeramicClient(endpoint)
    const threeIdConnect = new ThreeIdConnect()
    const provider = new EthereumAuthProvider((window as any).ethereum, account as any)

    await threeIdConnect.connect(provider)

    const did = new DID({
      provider: threeIdConnect.getDidProvider(),
      resolver: {
        ...ThreeIdResolver.getResolver(ceramic)
      }
    })
    
    ceramic.setDID(did)
    await ceramic?.did?.authenticate()
    setCeramic(ceramic) // Make sure to set this AFTER authenticating
    localStorage.setItem('IS_DID_CONNECTED', 'true')
    setIsLoading(false)
  }

  const disconnectFromDID = async () => {
    localStorage.setItem('IS_DID_CONNECTED', 'false')
    await ceramic.setDID(null)
    setCeramic(null)
  }

  const isNextDisabled = (step === 1 && !active) || (step === 2 && !isDIDActive) || step === 3

  return (
    <Modal close={close} className="w-full md:w-136">
      <div className="p-5 dark:bg-gray-800 rounded-lg">
        <div className="mx-4 p-4">
          <div className="flex items-center">
            <div className="flex items-center text-teal-600 relative">
              <div className={classNames(
                active ? "bg-green-200" : step === 1 && "bg-blue-200",
                "rounded-full flex justify-center items-center transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300")}
              >
                1
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Wallet</div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div className="flex items-center text-teal-600 relative">
              <div className={classNames(
                isDIDActive ? "bg-green-200" : step === 2 && "bg-blue-200",
                "rounded-full flex justify-center items-center transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-gray-300")}
              >
                2
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">DID</div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div className="flex items-center text-gray-500 relative">
              <div className={classNames(
                active && isDIDActive && "bg-green-200",
                "rounded-full flex justify-center items-center transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300")}
              >  
                3
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Confirm</div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4">
          {step === 1 && (
            <div>
              <NoSSRWalletInterface onWalletConnected={() => null} />
            </div>
          )}
          {step === 2 && (
            <div>
              <div>Connecting to a DID will allow you to change your data.</div>
              <button onClick={connectToDID} className="py-2 mt-2 text-lg font-bold text-white rounded-lg w-44 bg-blue-600 hover:bg-blue-800">Connect to DID</button>
              <button onClick={disconnectFromDID} className="py-2 mt-2 text-lg font-bold text-white rounded-lg w-44 bg-blue-600 hover:bg-blue-800">Disconnect from DID</button>
              {isLoading && (
                <div>
                  <CircleSpinner color="white" bgcolor="#0857e0" />
                  Loading...
                </div>
              )}
            </div>
          )}
          {step === 3 && (
            <div>
              <div>You are now connected!</div>
              <div>Connected Wallet Address: {account}</div>
              <div>Connected DID: {isDIDActive ? ceramic.did.id : 'No DID connected'}</div>
            </div>
          )}
          <div className="flex p-2 mt-4">
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className={classNames(
                step === 1 ? 'bg-gray-400' : 'hover:bg-blue-800 bg-blue-600',
                "text-base ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer text-white border duration-200 ease-in-out border-teal-600 transition"
              )}
            >
              Previous
            </button>
            <div className="flex-auto flex flex-row-reverse">
              <button 
                onClick={() => setStep(step + 1)}
                disabled={isNextDisabled}
                className={classNames(
                  isNextDisabled ? 'bg-gray-400' : 'hover:bg-blue-800 bg-blue-600',
                  "text-base ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer text-white border duration-200 ease-in-out border-teal-600 transition"
                )}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
