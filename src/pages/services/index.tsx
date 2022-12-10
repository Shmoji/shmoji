import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Services = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Services</div>
      <div className="flex flex-col items-center space-y-6">
        <A href="/services/coding" className="p-3 bg-blue-600 text-white rounded">Coding Services</A>
        <A href="/services/rent-a-friend" className="p-3 bg-blue-600 text-white rounded">Rent Me As A Friend</A>
      </div>
    </div>
  )
}

Services.layoutProps = {
  Layout: DefaultLayout,
}

export default Services
