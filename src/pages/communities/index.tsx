import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Communities = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <div className="ml-1">communities</div>
      </div>

      <div className="text-4xl font-bold mb-8">Communities</div>

      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <A href="/communities/desired" className="p-3 bg-blue-600 text-white rounded">Desired Communities</A>
        <A href="/communities/mine" className="p-3 bg-blue-600 text-white rounded">My Communities</A>
      </div>
    </div>
  )
}

Communities.layoutProps = {
  Layout: DefaultLayout,
}

export default Communities
