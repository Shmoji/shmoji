import DefaultLayout from "components/layouts/DefaultLayout"
import WrongNetworkOverlay from "modules/web3/components/WrongNetworkOverlay"

const ForceNetwork = () => {

  const addTokenToMM = async () => {
    try {
      const { ethereum } = window as any
      await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",  // ERC20 token address
            symbol: `DAI`,
            decimals: 18,
            image: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
          },
        },
      })
    } catch (ex) {
      // We don't handle that error for now
      // Might be a different wallet than Metmask
      // or user declined
      console.error(ex)
    }
  }

  return (
    <div className="md:w-3/5 mx-auto mt-6">

      <div className="text-4xl font-bold mb-10 text-center">Force Network on Web3 App</div>

      <div className="text-center">
        <div className="mb-4">This is a web3 app, what&apos;s up?!</div>
        <div>When connected to a wallet on this page, you will be forced to use the <b>Ethereum Mainnet</b> network</div>
      </div>

      <WrongNetworkOverlay />

    </div>
  )
}

ForceNetwork.layoutProps = {
  Layout: DefaultLayout,
}

export default ForceNetwork
