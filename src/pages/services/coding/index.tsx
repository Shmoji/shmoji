import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const CodingServices = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Coding Services</div>
      <div className="flex flex-col items-center space-y-6">
        <A href="/services/coding/google-login" className="p-3 bg-blue-600 text-white rounded">Login to your website using Google</A>
        <A href="/services/coding/twitter-login" className="p-3 bg-blue-600 text-white rounded">Login to your website using Twitter</A>
        <A href="/services/coding/connect-wallet" className="p-3 bg-blue-600 text-white rounded">Connect wallet to website</A>
        <A href="/services/coding/track-wallets" className="p-3 bg-blue-600 text-white rounded">Track wallets that connect to your site in a database</A>
      </div>
    </div>
  )
}

CodingServices.layoutProps = {
  Layout: DefaultLayout,
}

export default CodingServices
