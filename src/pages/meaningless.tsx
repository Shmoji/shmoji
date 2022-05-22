import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Meaningless = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Meaningless</div>
      <div className="mb-8 mx-4">Not sure if I create these when existence feels meaningless or if the goal behind the videos is to have no meaning. Probably both.</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="https://www.youtube.com/channel/UC2ZpdBUp_aXiUAkeqbVeKpQ">YouTube Channel</A></span>
      </div>
    </div>
  )
}

Meaningless.layoutProps = {
  Layout: DefaultLayout,
}

export default Meaningless
