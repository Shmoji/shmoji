import React from 'react'
import DefaultLayout from 'components/layouts/DefaultLayout'
import A from 'components/A'

export default function Cursor() {

  return (
    <div className="text-center px-4">

      <h1 className="">Choose the cursor you want to use</h1>

    </div>
  )
}

Cursor.layoutProps = {
  Layout: DefaultLayout,
}
