import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const RealityHub = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/communities" className="text-blue-600 mr-1 ml-1">communities</A> / <A href="/communities/desired" className="text-blue-600 mr-1 ml-1">desired</A> / <A href="/communities/desired/reality-hub" className="ml-1">reality hub</A>
      </div>

      <div className="text-4xl font-bold mb-8">Reality Hub</div>

      <div className="flex flex-col items-center space-y-6">
        <div>A place where people can store their mindmap. They enter a title of a concept and a description of that concept.</div>
      </div>
    </div>
  )
}

RealityHub.layoutProps = {
  Layout: DefaultLayout,
}

export default RealityHub
