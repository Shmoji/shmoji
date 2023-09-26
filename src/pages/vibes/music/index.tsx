import React, { useState } from 'react'
import DefaultLayout from 'components/layouts/DefaultLayout'
import classNames from 'classnames'
import dynamic from 'next/dynamic'

import { type NeedleEngineProps } from 'modules/needle/utils/needleEngine'
const NeedleEngine = dynamic<NeedleEngineProps>(() => import('modules/needle/utils/needleEngine'), { ssr: false })

export default function VibeMusic() {
  const [selectedButton, setSelectedButton] = useState('2D')

  const handleButtonClick = (button) => {
    setSelectedButton(button)
  }

  return (
    <div>

      <div className="text-2xl font-bold animate-pulse text-center my-10">Music that i have vibed with in some deep way</div> 

      {/* <div className="text-sm font-bold text-center mb-4">Do you prefer 2D (quick) or 3D (fun)?</div>

      <div className="flex justify-center my-4">
        <button
          className={classNames(
            'px-4 py-2 mr-2 rounded-md',
            selectedButton === '2D'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          )}
          onClick={() => handleButtonClick('2D')}
        >
          2D
        </button>
        <button
          className={classNames(
            'px-4 py-2 mr-2 rounded-md',
            selectedButton === '3D'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          )}
          onClick={() => handleButtonClick('3D')}
        >
          3D
        </button>
      </div> */}

      <div className="text-center px-4">

        <div className="flex flex-wrap justify-center mt-6">
          
          <iframe className="max-w-full" width="560" height="315" src="https://www.youtube.com/embed/ApvVRX_058s" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
          />
        
        </div>

      </div>

      {/* {selectedButton === '2D' ? (
        <div className="text-center px-4">

          <div className="flex flex-wrap justify-center mt-6">
            
            <iframe className="max-w-full" width="560" height="315" src="https://www.youtube.com/embed/ApvVRX_058s" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
            />
          
          </div>

        </div>
      ) : (
        <div className="text-center px-4 w-full h-[45rem]">
            
          <NeedleEngine
            loading-style="dark"
            style={{
              // width: '100%',
              // height: '100%',
              // position: 'fixed',
              // top: '0',
              // left: '0',
              zIndex: '0'
            }}
            src="/assets/songSharing12.glb"
          />

        </div>
      )} */}

    </div>
  )
}

VibeMusic.layoutProps = {
  Layout: DefaultLayout,
}
