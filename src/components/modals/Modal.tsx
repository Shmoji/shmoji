import { Transition } from '@headlessui/react'
import { ReactNode, useEffect } from 'react'
import { XIcon } from '@heroicons/react/solid'
import classNames from 'classnames'

export default function Modal({
  className = '',
  children,
  close,
}: {
  className?: string
  children?: ReactNode
  close: () => void
}) {
  // Disable Scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div>
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
          <Transition
            show={true}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="fixed inset-0 transition-opacity"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </Transition>
          <span className="inline-block h-screen align-middle"></span>
          &#8203;
          <Transition
            show={true}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            className={classNames(
              className,
              "inline-block text-left transition-all transform rounded-lg shadow-xl"
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="flex pb-2">
              <button
                type="button"
                className="p-2 ml-auto text-white transition duration-150 ease-in-out rounded-xl w-9 h-9 bg-blue-900 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-label="Close"
                onClick={close}
              >
                <XIcon className="w-full h-full" />
              </button>
            </div>
            <div className="overflow-hidden bg-white dark:bg-gray-700 rounded-lg">
              {children}
            </div>
          </Transition>
        </div>
      </div>
    </div>
  )
}
