import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const QuestionWiki = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Question Wiki</div>
      <div className="mb-8 mx-4">A project with the goal to make learning quicker and easier.</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="https://www.youtube.com/channel/UCucDAIamDmDZNiDCgcNHO0A">YouTube Channel</A></span>
        <span><A href="https://twitter.com/QuestionWiki">Twitter</A></span>
        <iframe className="max-w-full" width="560" height="315" src="https://www.youtube.com/embed/4k7Zbnlp07s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </div>
  )
}

QuestionWiki.layoutProps = {
  Layout: DefaultLayout,
}

export default QuestionWiki
