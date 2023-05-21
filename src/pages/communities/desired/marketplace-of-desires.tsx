import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const MarketplaceOfDesires = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/communities" className="text-blue-600 mr-1 ml-1">communities</A> / <A href="/communities/desired" className="text-blue-600 mr-1 ml-1">desired</A> / <A href="/communities/desired/marketplace-of-desires" className="ml-1">marketplace of desires</A>
      </div>

      <div className="text-4xl font-bold mb-8">Marketplace of Desires</div>

      <div className="flex flex-col items-center space-y-6">
        <div>A place where people can store their desires, see other people&apos;s desires, and more.</div>
      </div>
    </div>
  )
}

MarketplaceOfDesires.layoutProps = {
  Layout: DefaultLayout,
}

export default MarketplaceOfDesires
