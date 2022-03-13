import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Tries = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-bold mb-8">Shmoji Tries</div>
      <div className="mb-8 mx-4">A channel where I try stuff. Often, trying to understand new information.</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="https://www.youtube.com/channel/UC7Ry9_vZsPlAgn99s54LsiQ">YouTube Channel</A></span>
      </div>
    </div>
  )
}

Tries.layoutProps = {
  Layout: DefaultLayout,
}

export default Tries
