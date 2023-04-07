import DefaultLayout from "components/layouts/DefaultLayout"

const ConnectWallet = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Connect wallet to website</div>
      <div className="flex flex-col items-center space-y-6 w-full md:w-2/4 mx-auto">
        I can hook up wallet connection into your website. The appearance can be modified, but functionally it will work like the wallet connection you see on https://opensea.io.
      </div>
    </div>
  )
}

ConnectWallet.layoutProps = {
  Layout: DefaultLayout,
}

export default ConnectWallet
