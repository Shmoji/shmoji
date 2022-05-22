import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Socials = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Social Media</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="https://twitter.com/Shmojii">Twitter (10/10 active)</A></span>
        <span><A href="https://bit.ly/shmoji-discord">Discord (10/10 active)</A></span>
        <span><A href="https://www.instagram.com/shmojii/">Instagram (7/10 active)</A></span>
        <span><A href="https://www.facebook.com/johmsii/">Personal Facebook (5/10 active)</A></span>
        <span><A href="https://www.linkedin.com/in/shmoji/">LinkedIn (2/10 active)</A></span>
        <span><A href="https://www.facebook.com/shmojii">Facebook Page (1/10 active)</A></span>
      </div>
    </div>
  )
}

Socials.layoutProps = {
  Layout: DefaultLayout,
}

export default Socials
