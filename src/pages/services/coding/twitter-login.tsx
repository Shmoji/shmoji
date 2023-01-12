import DefaultLayout from "components/layouts/DefaultLayout"

const TwitterLogin = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Login to your website using Twitter</div>
      <div className="flex flex-col items-center space-y-6 w-full md:w-2/4 mx-auto">
        I will implement the ability to login to your website using Twitter. Simple as that! Get in contact for more details.
      </div>
    </div>
  )
}

TwitterLogin.layoutProps = {
  Layout: DefaultLayout,
}

export default TwitterLogin
