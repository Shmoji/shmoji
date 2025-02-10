import DefaultLayout from "components/layouts/DefaultLayout"

const AddTokenToMetaMask = () => {

  const addTokenToMM = async () => {
    try {
      const { ethereum } = window as any
      if (!ethereum) {
        alert('MetaMask is not installed')
        return
      }
      
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
      console.error(ex)
      alert('Failed to add token to MetaMask')
    }
  }

  return (
    <div className="md:w-3/5 mx-auto mt-6">

      <div className="text-4xl font-bold mb-10 text-center">Add Token to MetaMask</div>

      <div className="text-center">
        <button onClick={addTokenToMM} className="p-3 bg-blue-600 text-white rounded-lg font-bold">Add DAI to MetaMask</button>
        <div className="mt-4 italic">Note: this is Ethereum mainnet DAI. Not testnet or layer 2.</div>
      </div>

    </div>
  )
}

AddTokenToMetaMask.layoutProps = {
  Layout: DefaultLayout,
}

export default AddTokenToMetaMask
