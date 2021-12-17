import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const stories = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-bold mb-4">Stories</div>
      <ul className="text-blue-500 text-center">
        <li className="mb-2"><A href="/stories/story1">1: Self Inflicted Rules</A></li>
        <li className="mb-2"><A href="/stories/story2">2: Life, Death, and Science - A Short Story</A></li>
      </ul>
    </div>
  )
}

stories.layoutProps = {
  Layout: DefaultLayout,
}

export default stories
