import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Health = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / 
        <A href="/all" className="text-blue-600 mx-1">all</A> /
        <div className="ml-1">health</div>
      </div>

      <div className="text-4xl font-bold mb-4">Health and Longevity</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="/health/solve">🥺 Solve My Health Mystery</A></span>
        {/* <span><A href="/health/data">📊 Health Data</A></span> */}
        {/* <span><A href="/health/food">My Diet</A></span> */}
        <span><A href="https://www.youtube.com/channel/UC0PA_wH6Pt0uBuwxEaj8_Lg">▶️ YouTube Channel</A></span>
      </div>
    </div>
  )
}

Health.layoutProps = {
  Layout: DefaultLayout,
}

export default Health
