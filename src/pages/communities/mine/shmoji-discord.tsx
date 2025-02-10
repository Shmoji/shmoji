import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"
import Image from "next/image"
import Discord from '../../../assets/discord.svg'

const ShmojiDiscord = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/communities" className="text-blue-600 mr-1 ml-1">communities</A> / <A href="/communities/mine" className="text-blue-600 mr-1 ml-1">mine</A> / <A href="/communities/mine/shmoji-discord" className="ml-1">shmoji discord</A>
      </div>

      <div className="text-4xl font-bold mb-8">Shmoji Community Discord</div>

      <div className="flex flex-col items-center space-y-6">
        <div>idk how to describe it</div>

        <div
          onClick={() => {
            window.open('https://discord.com/invite/7kdQcuf', '_blank')
          }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <Image src={Discord} alt="Discord" width={24} height={24} />
          
          <div>join discord</div>
        </div>
      </div>
    </div>
  )
}

ShmojiDiscord.layoutProps = {
  Layout: DefaultLayout,
}

export default ShmojiDiscord
