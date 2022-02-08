import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const LibraryOfCreations = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-bold mb-8">Library of Creations</div>
      <div className="mb-8">A project with the goal of simply sharing creations of the mind.</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="https://www.youtube.com/channel/UC5aPac0vA6ubQ44IP6Boreg">YouTube Channel (more active)</A></span>
        <span><A href="https://medium.com/@libraryofcreations">Blog (less active)</A></span>
      </div>
    </div>
  )
}

LibraryOfCreations.layoutProps = {
  Layout: DefaultLayout,
}

export default LibraryOfCreations
