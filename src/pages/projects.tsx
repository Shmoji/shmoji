import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

// TODO: make so can sort
const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-4">all projects</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="https://whyspia.com">whyspia</A></span>
        <span><A href="/games">games</A></span>
        <span><A href="/coding">coding</A></span>
        <span><A href="/ideamarket">ideamarket</A></span>
        <span><A href="/gaming">gaming content</A></span>
        <span><A href="/music">music</A></span>
        <span><A href="/livestreaming">livestreaming</A></span>
        <span><A href="/stories">stories</A></span>
        <span><A href="/LibraryOfCreations">Library of Creations</A></span>
        <span><A href="/all41">All41 Protocol</A></span>
        <span><A href="/QuestionWiki">Question Wiki</A></span>
        <span><A href="/DiscoverReality">Discover Reality</A></span>
        <span><A href="/meaningless">meaningless</A></span>
        <span><A href="/health">health and longevity</A></span>
        <span><A href="https://www.youtube.com/channel/UC5QhJUgOzl_jfwsUfLpbVjw">clips to remember</A></span>
        <span><A href="https://www.youtube.com/channel/UC3bco-T1j1MnDqfOMdPOC8g">lofi With shmoji</A></span>
        <span><A href="/tries">shmoji tries</A></span>
        <span><A href="https://www.youtube.com/channel/UCvcAi3crny6675g266JxCDQ">life of shmoji</A></span>
        <span><A href="/ShmojiPostsAnything">shmoji posts ANYTHING</A></span>
        <span><A href="/ShmojiSpam">shmoji spam</A></span>
      </div>
    </div>
  )
}

Projects.layoutProps = {
  Layout: DefaultLayout,
}

export default Projects
