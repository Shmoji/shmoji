import DefaultLayout from "components/layouts/DefaultLayout"

const GoogleLogin = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Login to your website using Google</div>
      <div className="flex flex-col items-center space-y-6 w-full md:w-2/4 mx-auto">
        I will implement the ability to login to your website using Google. Simple as that! Get in contact for more details.
      </div>
    </div>
  )
}

GoogleLogin.layoutProps = {
  Layout: DefaultLayout,
}

export default GoogleLogin
