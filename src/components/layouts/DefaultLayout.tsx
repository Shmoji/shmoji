import Header from 'src/components/Header'
import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div>
          {children}
        </div>
      </div>
    </>
  )
}
