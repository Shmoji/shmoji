import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const CodingPuzzles = () => {

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-4">Puzzles for Coders</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="/puzzles/coding/series1">Series 1</A></span>
      </div>
    </div>
  )
}

CodingPuzzles.layoutProps = {
  Layout: DefaultLayout,
}

export default CodingPuzzles
