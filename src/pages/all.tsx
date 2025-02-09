import React, { useContext } from 'react'
import DefaultLayout from 'components/layouts/DefaultLayout'
import A from 'components/A'
import { GlobalContext } from './_app'

const categories = [
  { name: 'coding', href: '/coding' },
  { name: 'games', href: '/games'  },
  { name: 'gaming content', href: '/gaming'  },
  { name: 'music', href: '/music' },
  { name: 'stories', href: '/stories' },
  { name: 'playground', href: '/playground' },
  { name: 'communities', href: '/communities' },
  // { name: 'Puzzles', href: '/puzzles' },
  // { name: 'Mystery', href: '/mystery' },
  { name: 'expression', href: '/expression' },
  { name: 'health', href: '/health' },
  { name: 'services', href: '/services' },
  { name: 'all projects', href: '/projects' },
  { name: 'all socials', href: '/socials' },
]

// This page is curated by me to make certain projects stick out more than others. The All Projects page can be used to just show a list of all projects
export default function All() {
  const { isFunMode } = useContext(GlobalContext)

  return (
    <div>
      {isFunMode ? (
        <div className="text-center px-4">
          <span>this is the interface to all information related to shmoji</span>
          <div className="md:w-3/5 mx-auto flex flex-wrap justify-between mt-6">
            {categories.map(category => {
              return (
                <A href={category.href} key={category.name}>
                  <button className="p-3 mb-4 mr-2 bg-blue-600 text-white rounded">{category.name}</button>
                </A>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="text-center px-4">
          <span>this is the interface to all information related to shmoji</span>
          <div className="md:w-3/5 mx-auto flex flex-wrap justify-between mt-6">
            {categories.map(category => {
              return (
                <A href={category.href} key={category.name}>
                  <button className="p-3 mb-4 mr-2 bg-blue-600 text-white rounded">{category.name}</button>
                </A>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

All.layoutProps = {
  Layout: DefaultLayout,
}
