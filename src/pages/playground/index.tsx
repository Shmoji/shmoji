import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Playground = () => {

  return (
    <div className="md:w-3/5 mx-auto mt-6">

      <div className="text-4xl font-bold mb-10 text-center">PLAYGROUND</div>

      <div className="text-red-500 text-center text-sm mb-10">NOTE: many of these experiments may become depracated</div>

      <div className="text-center flex flex-col space-y-4">
        <A href="/playground/add-token-to-metamask">
          <button className="p-3 bg-blue-600 text-white rounded-lg">Add token to MetaMask</button>
        </A>

        <A href="/playground/force-network">
          <button className="p-3 bg-blue-600 text-white rounded-lg">Force Network on Web3 App</button>
        </A>
      </div>

    </div>
  )
}

Playground.layoutProps = {
  Layout: DefaultLayout,
}

export default Playground
