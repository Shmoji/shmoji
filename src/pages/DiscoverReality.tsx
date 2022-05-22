import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const DiscoverReality = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Discover Reality</div>
      <div className="mb-8 mx-4">A project with the goal of sharing reality and its beauty.</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="https://www.facebook.com/DiscoverRealityy">Facebook Page (active)</A></span>
        <span><A href="https://www.youtube.com/channel/UCrPD4lrLzm_-uYXLwE0AX3w">YouTube Channel (inactive)</A></span>
        <span><A href="https://twitter.com/DiscovrReality">Twitter (rarely active)</A></span>
      </div>
    </div>
  )
}

DiscoverReality.layoutProps = {
  Layout: DefaultLayout,
}

export default DiscoverReality
