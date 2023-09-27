import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const MyCommunities = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/communities" className="text-blue-600 mr-1 ml-1">communities</A> / <div className="ml-1">mine</div>
      </div>

      <div className="text-4xl font-bold mb-8">My Communities</div>

      <div className="mb-8">This is a list of communities that I am a part of and want to support</div>

      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <A href="/communities/mine/shmoji-discord" className="p-3 bg-blue-600 text-white rounded">Shmoji Discord</A>
        <A href="/communities/mine/experimenting-daily" className="p-3 bg-blue-600 text-white rounded">Experimenting Daily</A>
      </div>
    </div>
  )
}

MyCommunities.layoutProps = {
  Layout: DefaultLayout,
}

export default MyCommunities
