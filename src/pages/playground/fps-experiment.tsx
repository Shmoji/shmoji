import React, { useState } from 'react'
import DefaultLayout from 'components/layouts/DefaultLayout'
import classNames from 'classnames'
import dynamic from 'next/dynamic'

import { type NeedleEngineProps } from 'modules/needle/utils/needleEngine'
const NeedleEngine = dynamic<NeedleEngineProps>(() => import('modules/needle/utils/needleEngine'), { ssr: false })

export default function FPSExperiment() {
  const [selectedButton, setSelectedButton] = useState('2D')

  const handleButtonClick = (button) => {
    setSelectedButton(button)
  }

  return (
    <div>

      <div className="text-2xl font-bold text-center my-10">First Person Controller experiment</div>

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
          src="/assets/fpsExperiment.glb"
        />

      </div>

    </div>
  )
}

FPSExperiment.layoutProps = {
  Layout: DefaultLayout,
}
