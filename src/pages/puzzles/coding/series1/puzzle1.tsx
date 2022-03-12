import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const CodingPuzzleSeries1Puzzle1 = () => {

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-bold mb-4">Puzzles for Coders - Series 1 Puzzle 1</div>
      <div className="flex flex-col items-center space-y-6 mt-4 text-white">
        <div className="flex items-center space-x-2">
          <span>Enter solution here:</span>
          <input className="w-40 h-10 px-2 rounded" />
        </div>
      </div>
    </div>
  )
}

CodingPuzzleSeries1Puzzle1.layoutProps = {
  Layout: DefaultLayout,
}

export default CodingPuzzleSeries1Puzzle1
