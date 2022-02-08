import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

// TODO: make so can sort
const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-bold mb-4">All Projects</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="/coding">Coding</A></span>
        <span><A href="/gaming">Gaming</A></span>
        <span><A href="/music">Music</A></span>
        <span><A href="/stories">Stories</A></span>
        <span><A href="/LibraryOfCreations">Library of Creations</A></span>
      </div>
    </div>
  )
}

Projects.layoutProps = {
  Layout: DefaultLayout,
}

export default Projects
