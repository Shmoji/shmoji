import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const ShmojiSpam = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Shmoji Spam</div>
      <div className="mb-8 mx-4">Shmoji considers this content to be spam. Could be useful...but who knows.</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="https://www.youtube.com/@shmojispam">YouTube Channel</A></span>
      </div>
    </div>
  )
}

ShmojiSpam.layoutProps = {
  Layout: DefaultLayout,
}

export default ShmojiSpam
