import React, { useContext } from 'react'
import DefaultLayout from 'components/layouts/DefaultLayout'
import A from 'components/A'
import { GlobalContext } from './_app'
import Tooltip from 'components/tooltips/Tooltip'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'

import dynamic from 'next/dynamic'

import { type NeedleEngineProps } from '../modules/needle/utils/needleEngine'
const NeedleEngine = dynamic<NeedleEngineProps>(() => import('../modules/needle/utils/needleEngine'), { ssr: false })

export default function Home() {
  const { isFunMode } = useContext(GlobalContext)

  return (
    <div>

      <NeedleEngine
          loading-style="dark"
          style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '0'
          }}
          // src=""
      />

      {isFunMode ? (
        <>
          <div className="text-center px-4 relative z-40">

            <div className="text-2xl font-bold">Why are you here? What do you desire?</div>

            <div className="flex flex-wrap justify-center mt-6">
            
            
              <button className="flex items-center p-3 mb-4 mr-2 bg-red-500 text-white rounded-lg hover:bg-red-600 opacity-50">
                adventure<Tooltip tooltipContent={"coming soon..."}><QuestionMarkCircleIcon className="w-4 h-4" /></Tooltip>
              </button>
              

              <button className="flex items-center p-3 mb-4 mr-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 opacity-50">
                fun<Tooltip tooltipContent={"coming soon..."}><QuestionMarkCircleIcon className="w-4 h-4" /></Tooltip>
              </button>

              <button className="flex items-center p-3 mb-4 mr-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 opacity-50" >
                random nonsense<Tooltip tooltipContent={"coming soon..."}><QuestionMarkCircleIcon className="w-4 h-4" /></Tooltip>
              </button>

              <button className="flex items-center p-3 mb-4 mr-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 opacity-50">
                idk what i want<Tooltip tooltipContent={"coming soon..."}><QuestionMarkCircleIcon className="w-4 h-4" /></Tooltip>
              </button>

              <A
                href="/all"
                className="p-3 mb-4 mr-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
              >
                index of all shmoji info
              </A>

            </div>

          </div>
        </>
      ) : (
        <div className="text-center px-4 relative z-40">

          <div className="text-2xl font-bold">Why are you here? What do you desire?</div>

          <div className="flex flex-wrap justify-center mt-6">
            
            
            <button className="flex items-center p-3 mb-4 mr-2 bg-red-500 text-white rounded-lg hover:bg-red-600 opacity-50">
              adventure<Tooltip tooltipContent={"coming soon..."}><QuestionMarkCircleIcon className="w-4 h-4" /></Tooltip>
            </button>
            

            <button className="flex items-center p-3 mb-4 mr-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 opacity-50">
              fun<Tooltip tooltipContent={"coming soon..."}><QuestionMarkCircleIcon className="w-4 h-4" /></Tooltip>
            </button>

            <button className="flex items-center p-3 mb-4 mr-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 opacity-50" >
              random nonsense<Tooltip tooltipContent={"coming soon..."}><QuestionMarkCircleIcon className="w-4 h-4" /></Tooltip>
            </button>

            <button className="flex items-center p-3 mb-4 mr-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 opacity-50">
              idk what i want<Tooltip tooltipContent={"coming soon..."}><QuestionMarkCircleIcon className="w-4 h-4" /></Tooltip>
            </button>

            <A
              href="/all"
              className="p-3 mb-4 mr-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            >
              index of all shmoji info
            </A>
          
          </div>

        </div>
      )}
    </div>
  )
}

Home.layoutProps = {
  Layout: DefaultLayout,
}
