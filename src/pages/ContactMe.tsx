import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Contact Me</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="https://discord.com/invite/7kdQcuf">Discord - text chat me in server</A></span>
        <span><A href="https://calendly.com/shmoji/30min">Calendly - schedule call with me</A></span>
        <span><A>Email: shmoji@protonmail.com - email me, but i may miss it compared to Discord chat</A></span>
      </div>
    </div>
  )
}

ContactMe.layoutProps = {
  Layout: DefaultLayout,
}

export default ContactMe
