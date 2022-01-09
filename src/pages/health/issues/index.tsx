import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Issues = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-bold mb-4">Health Issues</div>
      <div className="flex flex-col items-center space-y-6 text-blue-500">
        <span><A href="/health/issues/history">History of Health Issues</A></span>
      </div>
    </div>
  )
}

Issues.layoutProps = {
  Layout: DefaultLayout,
}

export default Issues
