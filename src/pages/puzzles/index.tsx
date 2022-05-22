import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Puzzles = () => {

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-4">Puzzles</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="/puzzles/coding">Puzzles for Coders</A></span>
      </div>
    </div>
  )
}

Puzzles.layoutProps = {
  Layout: DefaultLayout,
}

export default Puzzles
