import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"
import DefaultLayout from "components/layouts/DefaultLayout"

const Food = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-bold mb-4">My Diet</div>
      <div className="md:w-3/5 flex flex-col items-start space-y-6">
        {/* TODO: use history panels to show data. Intermitent fasting and more */}
      </div>
    </div>
  )
}

Food.layoutProps = {
  Layout: DefaultLayout,
}

export default Food
