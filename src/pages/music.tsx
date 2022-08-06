import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const music = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-4xl font-bold">Music</div>
      <div className="flex flex-col items-center space-y-6 text-blue-600">
        <span><A href="https://www.youtube.com/c/Shmoji">Music on YouTube</A></span>
        <span><A href="https://www.youtube.com/redirect?event=channel_banner&redir_token=QUFFLUhqay1PSnpYcWRYZ2E2ZVROSlJYRWZtS3l4SzJSUXxBQ3Jtc0treHZMRGRYRktISnpDcWxvY09zZ1N3bnhtLWhjV0JOMlZ3Mm1xWEpSY1VlOEllMkRYeWQ0UnFIMmhNMVhnaHJ5d3ZKaGVZdUY1WDVLMFpUM3BNNXNSR2pUanREeXExcHFlTHJZTmp1ZmxVdndGbGIwcw&q=https%3A%2F%2Fopen.spotify.com%2Fartist%2F7Cs2wbxIpHRF4w30nC2cY8%3Fsi%3DaxVkrOjYSZSk2dmUCPJ6uQ">Music on Spotify</A></span>
      </div>
      <div className="text-center">
        <span>Shmoji&apos;s personal fav:</span>
        <iframe className="max-w-full" width="560" height="315" src="https://www.youtube.com/embed/wxqtn_tCPdM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </div>
  )
}

music.layoutProps = {
  Layout: DefaultLayout,
}

export default music
