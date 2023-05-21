import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const InTheFeels = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/communities" className="text-blue-600 mr-1 ml-1">communities</A> / <A href="/communities/desired" className="text-blue-600 mr-1 ml-1">desired</A> / <A href="/communities/desired/in-the-feels" className="ml-1">in the feels</A>
      </div>

      <div className="text-4xl font-bold mb-8">In the Feels</div>

      <div className="flex flex-col items-center space-y-6">
        <div>A place where people can store their feelings, see other people's feelings, and more. This includes physical and mental feelings.</div>
      </div>
    </div>
  )
}

InTheFeels.layoutProps = {
  Layout: DefaultLayout,
}

export default InTheFeels