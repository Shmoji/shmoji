import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Games = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-4">games created by shmoji</div>
      <ul className="text-blue-500 text-center">
        <li className="mb-2"><A href="/games/starshifter" target="_blank" rel="noopener noreferrer">Star Shifter</A></li>
      </ul>
    </div>
  )
}

Games.layoutProps = {
  Layout: DefaultLayout,
}

export default Games
