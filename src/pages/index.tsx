import React from 'react'
import DefaultLayout from 'components/layouts/DefaultLayout'
import A from 'components/A'

const categories = [
  { name: 'Coding', href: '/coding' },
  { name: 'Gaming', href: '/gaming'  },
  { name: 'Music', href: '/music' },
  { name: 'Stories', href: '/stories' },
  { name: 'Mystery', href: '/mystery' },
]

export default function Home() {
  return (
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
  )
}

Home.layoutProps = {
  Layout: DefaultLayout,
}
