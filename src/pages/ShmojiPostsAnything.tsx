import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const ShmojiPostsAnything = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Shmoji Posts ANYTHING</div>
      <div className="mb-8 mx-4">Shmoji posts content here that does not fit into any category. Content may be random af. Content could be ANYTHING.</div>
      <div className="mb-8 mx-4">Content here is not spam though. Shmoji predicts this content may have higher value for others than his channel for spam. He could obviously be wrong.</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="https://www.youtube.com/@shmojipostsanything">YouTube Channel</A></span>
      </div>
    </div>
  )
}

ShmojiPostsAnything.layoutProps = {
  Layout: DefaultLayout,
}

export default ShmojiPostsAnything
