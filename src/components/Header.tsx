/* eslint-disable @next/next/no-img-element */
import { Router, useRouter } from 'next/dist/client/router'
import { useState, useEffect } from 'react'
import WalletStatus from 'components/wallet/WalletStatus'
import { MenuIcon, XCircleIcon } from '@heroicons/react/solid'
import NProgress from 'nprogress'
import A from './A'
import ModalService from 'components/modals/ModalService'
import WalletModal from './wallet/WalletModal'
import classNames from 'classnames'

type MenuItemType = {
  name: string,
  value: string,
  onClick: () => void,
  isSelected: boolean,
}

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const router = useRouter()
  const closeMenu = () => setIsMobileNavOpen(false)
  const menuItems: MenuItemType[] = []

  useEffect(() => {
    NProgress.configure({ trickleSpeed: 100 })
  }, [])

  useEffect(() => {
    Router.events.on('routeChangeStart', () => NProgress.start())
    Router.events.on('routeChangeComplete', () => NProgress.done())
    Router.events.on('routeChangeError', () => NProgress.done())

    return () => {
      Router.events.on('routeChangeStart', () => NProgress.start())
      Router.events.on('routeChangeComplete', () => NProgress.done())
      Router.events.on('routeChangeError', () => NProgress.done())
    }
  }, [])

  return (
    <>
      <nav className="fixed top-0 z-20 w-full shadow bg-black">
        <div className="px-2 mx-auto transform max-w-88 md:max-w-304">
          <div className="relative flex items-center justify-between h-16">
            <div
              className="z-20 flex items-center flex-shrink-0 cursor-pointer"
              onClick={() => router.push('/')}
            >
              <span className="w-auto h-full text-2xl leading-none text-white md:text-3xl">
                Shmoji
              </span>
            </div>

            <div className="absolute hidden w-full space-x-8 text-center md:inline">
              {menuItems.map((menuItem) => (
                <A
                  key={menuItem.value}
                  onClick={() => {
                    menuItem.onClick()
                    closeMenu()
                  }}
                  className={classNames(
                    'cursor-pointer inline-flex items-center px-1 text-lg font-medium leading-5 tracking-tighter transition duration-150 ease-in-out focus:outline-none focus:text-gray-700 focus:border-gray-300',
                    menuItem.isSelected
                      ? 'text-white'
                      : 'text-brand-gray text-opacity-60 hover:text-brand-gray-2'
                  )}
                >
                  {menuItem.name}
                </A>
              ))}
            </div>
            <div className="z-20 hidden md:ml-6 md:flex md:items-center">
              <WalletStatus openModal={() => ModalService.open(WalletModal)} />
            </div>
            <div className="flex items-center -mr-2 md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                aria-label="Main menu"
                aria-expanded="false"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              >
                <MenuIcon
                  className={classNames(
                    'w-6 h-6',
                    isMobileNavOpen ? 'hidden' : 'block'
                  )}
                />
                <XCircleIcon
                  className={classNames(
                    'w-6 h-6',
                    isMobileNavOpen ? 'block' : 'hidden'
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        <div
          className={classNames(
            'md:hidden',
            isMobileNavOpen ? 'block' : 'hidden'
          )}
        >
          <div className="pt-2 pb-3 text-center">
            {menuItems.map((menuItem) => (
              <A
                onClick={() => {
                  menuItem.onClick()
                  closeMenu()
                }}
                key={menuItem.value}
                className={classNames(
                  'cursor-pointer block py-2 pl-3 pr-4 mt-1 text-base font-medium transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300',
                  menuItem.isSelected
                    ? 'text-white'
                    : 'text-brand-gray text-opacity-60'
                )}
              >
                {menuItem.name}
              </A>
            ))}

            <div className="flex justify-center mt-5">
              <WalletStatus openModal={() => ModalService.open(WalletModal)} />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
