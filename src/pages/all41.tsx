import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const All41 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">All41 Protocol</div>
      <div className="mb-8 mx-4">A protocol that allows people to save money, earn passive income, and receive donations.</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="https://all41-frontend.vercel.app/">Demo website</A></span>
        <span><A href="https://discord.com/invite/dm3VqGZCvf">Discord</A></span>
        <span><A href="https://twitter.com/all41protocol">Twitter</A></span>
      </div>
    </div>
  )
}

All41.layoutProps = {
  Layout: DefaultLayout,
}

export default All41
