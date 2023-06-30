import React from 'react'
import DefaultLayout from 'components/layouts/DefaultLayout'

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript'
import A from 'components/A';

const RecursedCode = `
  // holy shit something inside wants out
  function TryToExpressInternalState() {
    TryManifestation(ideas)
  }

  function TryManifestation() {
    const ideas = ComeUpWithIdeas()

    if (ideas === GOOD) {
      Create(ideas)
    } else {
      TryManifestation()
    }

    WaitWTF()
  }

  function ComeUpWithIdeas() {
    const WhatSkillsDoIHave = "shit idk"
    const WhatHaveIBuiltInThePast = "stuff and things"
    const WhatAmIPassionateAbout = "everything basically"
    // etc etc - more idea generation

    const allIdeas = [..., "ur mum"]

    return allIdeas
  }

  function Create(ideas) {
    return "YOU WIN - you are in the flow and creating"
  }

  function WaitWTF() {
    const reality1 = "actually...everything you just built is garbage"
    const reality2 = "ideas were GOOD, but just couldn't think of how to build them into reality"

    if (reality1) {
      Quit()
    } else if (reality2) {
      TryManifestation()
    } else {
      console.error("huhhh - you shouldnt be here")
    }
  }

  function Quit() {
    return "im gonna go watch anime"
  }

  TryToExpressInternalState()
`

export default function ManifestationError() {

  return (
    <div className="md:flex flex-col items-center text-center px-4">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/expression" className="text-blue-600 mr-1 ml-1">expression</A> / <A href="/expression/manifestation-error" className="ml-1">manifestation error</A>
      </div>

      <h1 className="text-4xl font-bold mb-8 mt-4">Manifestation Error</h1>

      <div className="text-left">
        <CodeMirror
          value={RecursedCode}
          height="700px"
          theme="dark"
          editable={false}
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </div>

    </div>
  )
}

ManifestationError.layoutProps = {
  Layout: DefaultLayout,
}
