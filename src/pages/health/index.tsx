import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Health = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-bold mb-4">Health and Longevity</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="/health/issues">Health Issues</A></span>
        <span><A href="/health/food">My Diet</A></span>
      </div>
    </div>
  )
}

Health.layoutProps = {
  Layout: DefaultLayout,
}

export default Health
