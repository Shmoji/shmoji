import React, { useContext } from 'react'
import DefaultLayout from 'components/layouts/DefaultLayout'
import A from 'components/A'
import { GlobalContext } from './_app'

const categories = [
  { name: 'Coding', href: '/coding' },
  { name: 'Gaming', href: '/gaming'  },
  { name: 'Music', href: '/music' },
  { name: 'Stories', href: '/stories' },
  { name: 'Playground', href: '/playground' },
  { name: 'Communities', href: '/communities' },
  // { name: 'Puzzles', href: '/puzzles' },
  // { name: 'Mystery', href: '/mystery' },
  { name: 'Expression', href: '/expression' },
  { name: 'Health', href: '/health' },
  { name: 'Services', href: '/services' },
  { name: 'All Projects', href: '/projects' },
  { name: 'All Socials', href: '/socials' },
]

// This page is curated by me to make certain projects stick out more than others. The All Projects page can be used to just show a list of all projects
export default function All() {
  const { isFunMode } = useContext(GlobalContext)

  return (
    <div>
      {isFunMode ? (
        <div className="text-center px-4">
          <span>This is the interface to all information related to Shmoji.</span>
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
          <span>This is the interface to all information related to Shmoji.</span>
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
