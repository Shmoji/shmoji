import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const DesiredCommunities = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/communities" className="text-blue-600 mr-1 ml-1">communities</A> / <div className="ml-1">desired</div>
      </div>

      <div className="text-4xl font-bold mb-8">Desired Communities</div>

      <div className="mb-8">This is a list of communities that i desire to exist and I'm working to help form</div>

      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <A href="/communities/desired/reality-hub" className="p-3 bg-blue-600 text-white rounded">People storing their mind map (Reality Hub)</A>
        <A href="/communities/desired/marketplace-of-desires" className="p-3 bg-blue-600 text-white rounded">People storing their desires (Marketplace of Desires)</A>
        <A href="/communities/desired/in-the-feels" className="p-3 bg-blue-600 text-white rounded">People storing their feelings (In the Feels)</A> 
        <A href="/communities/desired/desire-assistant" className="p-3 bg-blue-600 text-white rounded">People creating optimal UX flows for each desire of a person (Desire Assistant)</A> 
      </div>
    </div>
  )
}

DesiredCommunities.layoutProps = {
  Layout: DefaultLayout,
}

export default DesiredCommunities
