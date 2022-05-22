import DefaultLayout from "components/layouts/DefaultLayout"

export default function Papa() {

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-4">Papa</div>
      <div className="flex flex-col items-center space-y-6">
        Let me know what you want on your page!
      </div>
    </div>
  )
}

Papa.layoutProps = {
  Layout: DefaultLayout,
}
