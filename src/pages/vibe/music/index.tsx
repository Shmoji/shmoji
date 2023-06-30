import React, { useContext } from 'react'
import DefaultLayout from 'components/layouts/DefaultLayout'
import A from 'components/A'
import { GlobalContext } from '../../_app'

export default function VibeMusic() {
  const { isFunMode } = useContext(GlobalContext)

  return (
    <div>
      {isFunMode ? (
        <div className="text-center px-4">

          <div className="text-2xl font-bold animate-pulse">Music that i have vibed with in some deep way</div>

          <div className="flex flex-wrap justify-center mt-6">
            
            <iframe className="max-w-full" width="560" height="315" src="https://www.youtube.com/embed/ApvVRX_058s" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
            />
          
          </div>

        </div>
      ) : (
        <div className="text-center px-4">

        </div>
      )}
    </div>
  )
}

VibeMusic.layoutProps = {
  Layout: DefaultLayout,
}
