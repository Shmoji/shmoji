import DefaultLayout from "components/layouts/DefaultLayout"

export default function Nana() {

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-bold mb-4">Nana</div>
      <div className="flex flex-col items-center space-y-6">
        Let me know what you want on your page!
      </div>
    </div>
  )
}

Nana.layoutProps = {
  Layout: DefaultLayout,
}
