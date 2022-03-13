import { submitPuzzleAnswer } from "actions/submitPuzzleAnswer"
import DefaultLayout from "components/layouts/DefaultLayout"
import { useState } from "react"
import { PuzzleMap } from "utils/puzzles"

const CodingPuzzleSeries1Puzzle1 = () => {
  const [solutionText, setSolutionText] = useState('')

  const onSubmitClicked = async () => {
    submitPuzzleAnswer(PuzzleMap.CODE_1_1, solutionText)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-bold mb-4">Puzzles for Coders - Series 1 Puzzle 1</div>
      <div className="flex flex-col items-center space-y-6 mt-4 text-white">
        <div className="flex items-center space-x-2">
          <span>Enter solution here:</span>
          <input
            onChange={(event) => setSolutionText(event.target.value)}
            className="w-40 h-10 px-2 rounded text-black"
          />
          <button
            onClick={onSubmitClicked}
            className="p-3 bg-blue-600 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

CodingPuzzleSeries1Puzzle1.layoutProps = {
  Layout: DefaultLayout,
}

export default CodingPuzzleSeries1Puzzle1
