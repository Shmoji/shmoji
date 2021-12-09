import Header from 'components/Header'
import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <div className="min-h-screen py-20 bg-white dark:bg-dark3 dark:text-white">
        <Header />
        <div>
          {children}
        </div>
      </div>
    </>
  )
}
