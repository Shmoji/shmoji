import { UserCircleIcon } from '@heroicons/react/solid'
import { useWeb3React } from '@web3-react/core'

export default function WalletStatus({ openModal }: { openModal: () => void }) {
  const { active, account } = useWeb3React()

  return (
    <>
      <div
        className="flex flex-row items-center px-2 cursor-pointer justify-self-end"
        onClick={() => openModal()}
      >
        {!active && <UserCircleIcon className="w-4 h-4 text-red" />}
        {!active && (
          <div className="ml-3 text-gray-400 align-middle whitespace-nowrap">
            No wallet
          </div>
        )}

        {active && <UserCircleIcon className="w-4 h-4 text-green" />}
        {active && (
          <div className="ml-3 text-gray-400 align-middle whitespace-nowrap">
            {account.slice(0, 6)}...{account.slice(-4)}
          </div>
        )}
      </div>
    </>
  )
}
