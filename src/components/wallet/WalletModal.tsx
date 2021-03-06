import { useContext } from 'react'
// import { GlobalContext } from 'pages/_app'

import Modal from '../modals/Modal'
import dynamic from 'next/dynamic'

const NoSSRWalletInterface = dynamic(() => import('./WalletInterface'), {
  ssr: false,
})

export default function WalletModal({ close }: { close: () => void }) {
  // const { onWalletConnectedCallback, setOnWalletConnectedCallback } =
  //   useContext(GlobalContext)

  function closeModal(success) {
    close()

    // if (onWalletConnectedCallback) {
    //   if (success) {
    //     onWalletConnectedCallback()
    //   }
    //   setOnWalletConnectedCallback(undefined)
    // }
  }

  return (
    <Modal close={() => closeModal(false)} className="w-96">
      <div className="p-4">
        <p className="text-2xl text-center text-black md:text-3xl">
          {' '}
          Choose wallet
        </p>
      </div>
      <NoSSRWalletInterface onWalletConnected={() => closeModal(true)} />
    </Modal>
  )
}
