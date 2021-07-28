import Header from 'components/Header'
import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <div className="min-h-screen bg-brand-gray">
        <Header />
        <div>
          {children}
        </div>
      </div>
    </>
  )
}
