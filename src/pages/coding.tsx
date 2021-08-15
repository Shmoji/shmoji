import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

export default function Coding() {
  return (
    <div className="flex flex-col items-center text-blue-600 space-y-6">
      <span><A href="https://www.youtube.com/c/ShmojiCodes">Coding Videos (youtube.com)</A></span>
      <span><A href="https://www.twitch.tv/shmojicodes">Coding Livestream (twitch.tv)</A></span>
      <span><A href="https://shmoji.medium.com/">Coding Blog (medium.com)</A></span>
    </div>
  )
}

Coding.layoutProps = {
  Layout: DefaultLayout,
}
