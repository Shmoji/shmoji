import React, { useContext } from 'react'
import DefaultLayout from 'components/layouts/DefaultLayout'
import A from 'components/A'
import { GlobalContext } from './_app'
import Tooltip from 'components/tooltips/Tooltip'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'

export default function Home() {
  const { isFunMode } = useContext(GlobalContext)

  return (
    <div>
      {isFunMode ? (
        <div className="text-center px-4">

          <div className="text-2xl font-bold animate-pulse">Why are you here? What do you desire?</div>

          <div className="flex flex-wrap justify-center mt-6">
            
            <Tooltip tooltipContent={"coming soon..."}>
              <button className="p-3 mb-4 mr-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50" disabled>
                adventure
              </button>
            </Tooltip>

            <button className="p-3 mb-4 mr-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:opacity-50" disabled>
              fun
            </button>

            <button className="p-3 mb-4 mr-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50" disabled>
              random nonsense
            </button>

            <button className="p-3 mb-4 mr-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 disabled:opacity-50" disabled>
              idk what i want
            </button>

            <A
              href="/all"
              className="p-3 mb-4 mr-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            >
              index of all shmoji info
            </A>
          
          </div>

        </div>
      ) : (
        <div className="text-center px-4">

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
