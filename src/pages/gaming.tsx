import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

export default function Gaming() {
  return (
    <div className="flex flex-col items-center text-blue-600 space-y-6">
      <span><A href="https://www.youtube.com/channel/UCb3a6dxEeD_xw_nhtKOLzLw">Long Gaming Videos (youtube.com)</A></span>
      <span><A href="https://www.youtube.com/channel/UCRJOvU4e_6T5Ewo3q5bGcsQ">Short Gaming Videos (youtube.com)</A></span>
      <span><A href="https://www.twitch.tv/shmoji">Gaming Livestream (twitch.tv)</A></span>
    </div>
  )
}

Gaming.layoutProps = {
  Layout: DefaultLayout,
}
