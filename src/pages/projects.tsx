import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

// TODO: make so can sort
const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-4">All Projects</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="/coding">Coding</A></span>
        <span><A href="/ideamarket">Ideamarket</A></span>
        <span><A href="/gaming">Gaming</A></span>
        <span><A href="/music">Music</A></span>
        <span><A href="/stories">Stories</A></span>
        <span><A href="/LibraryOfCreations">Library of Creations</A></span>
        <span><A href="/all41">All41 Protocol</A></span>
        <span><A href="/QuestionWiki">Question Wiki</A></span>
        <span><A href="/DiscoverReality">Discover Reality</A></span>
        <span><A href="/meaningless">Meaningless</A></span>
        <span><A href="/health">Health and Longevity</A></span>
        <span><A href="https://www.youtube.com/channel/UC5QhJUgOzl_jfwsUfLpbVjw">Clips to Remember</A></span>
        <span><A href="https://www.youtube.com/channel/UC3bco-T1j1MnDqfOMdPOC8g">Lofi With Shmoji</A></span>
        <span><A href="/tries">Shmoji Tries</A></span>
        <span><A href="https://www.youtube.com/channel/UCvcAi3crny6675g266JxCDQ">Life of Shmoji</A></span>
      </div>
    </div>
  )
}

Projects.layoutProps = {
  Layout: DefaultLayout,
}

export default Projects
