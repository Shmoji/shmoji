import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const expression = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Expression of Shmoji</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <A href="/expression/suffer" className="p-3 bg-blue-600 text-white rounded">Suffering</A>
        <A href="/expression/myspace" className="p-3 bg-blue-600 text-white rounded">Myspace</A>
      </div>
    </div>
  )
}

expression.layoutProps = {
  Layout: DefaultLayout,
}

export default expression
