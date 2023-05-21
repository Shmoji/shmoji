import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const DesireAssistant = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/communities" className="text-blue-600 mr-1 ml-1">communities</A> / <A href="/communities/desired" className="text-blue-600 mr-1 ml-1">desired</A> / <A href="/communities/desired/desire-assistant" className="ml-1">desire assistant</A>
      </div>

      <div className="text-4xl font-bold mb-8">Desire Assistant</div>

      <div className="flex flex-col items-center space-y-6">
        <div>A place where people work together to create optimal UX flows for each desire of each person.</div>
      </div>
    </div>
  )
}

DesireAssistant.layoutProps = {
  Layout: DefaultLayout,
}

export default DesireAssistant