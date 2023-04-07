import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

export default function Livestreaming() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-4">Livestreaming</div>
      <div className="flex flex-col items-center space-y-6 ">
        <span><A className="text-blue-500" href="https://www.twitch.tv/shmoji">https://www.twitch.tv/shmoji</A> - Here to play, make friends, and hangout with you 🙂 I stream around 3-4 times per week and each stream lasts about 2 hours. I stream ANYTHING, not just games</span>
        <span><A className="text-blue-500" href="https://www.twitch.tv/evilshmoji">https://www.twitch.tv/evilshmoji</A> - (つ ͡° ͜ʖ ͡°)つ im unpredictable. i stream ANYTHING and wont spend energy to cater to viewers.</span>
      </div>
    </div>
  )
}

Livestreaming.layoutProps = {
  Layout: DefaultLayout,
}
