import Header from 'components/Header'
import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <div className="min-h-screen py-20">
        <Header />
        <div>
          {children}
        </div>
      </div>
    </>
  )
}
