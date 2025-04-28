import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const music = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-4xl font-bold">Music</div>
      <div className="flex flex-col items-center space-y-6 text-blue-600">
        <span><A href="https://www.youtube.com/@shmojimusic">Music on YouTube</A></span>
        <span><A href="https://open.spotify.com/artist/7Cs2wbxIpHRF4w30nC2cY8?si=axVkrOjYSZSk2dmUCPJ6uQ&nd=1">Music on Spotify</A></span>
      </div>
      <div className="text-center">
        <span>Shmoji&apos;s personal fav:</span>
        <iframe className="max-w-full" width="560" height="315" src="https://www.youtube.com/embed/Rghcd1td2Qs?si=WGOYD_mO7gTDxk4K" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </div>
  )
}

music.layoutProps = {
  Layout: DefaultLayout,
}

export default music
