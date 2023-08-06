import DefaultLayout from "components/layouts/DefaultLayout"
import Tooltip from "components/tooltips/Tooltip"
import Eyeball from '../assets/eyeball.svg'
import Image from "next/image"

const mystery = () => {
  return (
    <div className="w-2/4 mx-auto">
      <div className="flex flex-col space-y-1">
        <div>Photons hit your eyes as you read this text on a screen.</div>
        <div>These photons contain information that is transported to your brain.</div>
        <div>This squishy thing contains a family of neurons.</div>
        <div>Somehow this family creates your ego; your perception; what you probably consider to be you.</div>
        <div>They take in the photons and somehow understand the information.</div>
        <div>So...what actually makes you...<Tooltip tooltipContent={<Image src={Eyeball} alt="Discord" width={50} height={50} />}>you</Tooltip>?</div>
      </div>

      
    </div>
  )
}

mystery.layoutProps = {
  Layout: DefaultLayout,
}

export default mystery
