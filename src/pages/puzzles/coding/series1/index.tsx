import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const CodingPuzzleSeries1 = () => {

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-4">Puzzles for Coders - Series 1</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="/puzzles/coding/series1/puzzle1">Puzzle 1</A></span>
      </div>
    </div>
  )
}

CodingPuzzleSeries1.layoutProps = {
  Layout: DefaultLayout,
}

export default CodingPuzzleSeries1
