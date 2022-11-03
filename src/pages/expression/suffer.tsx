import DefaultLayout from "components/layouts/DefaultLayout"
import { useState } from "react"

const Suffer = () => {
  const [sufferCount, setSufferCount] = useState(0)

  return (
    <div className="w-2/4 mx-auto">

      <div className="flex flex-col space-y-3">
        <div className="text-red-500">Suffer counter: {sufferCount}</div>
        <div
          onClick={() => setSufferCount((prevCount) => prevCount + 1)}
          className="p-4 bg-red-500 hover:bg-red-700 rounded-2xl border-black font-bold cursor-pointer select-none"
        >
          Why must I suffer?
        </div>
        <div>If I die due to the bringer of suffering, what was the point?</div>
        <div>Why do some suffer more than others?</div>
        <div>What is the best step by step strategy to deal with suffering?</div>
        <div>Can I observe my suffering without identifying with it?</div>
        <div>Is there any benefit to letting yourself feel the suffering completely without resisting? If so, is there only benefit if the suffering eventually ends?</div>
        <div>Does resisting suffering make it worse?</div>
        <div>If the intensity of suffering is incredibly high, does a human have any choice in whether they resist or not?</div>
        <div>When I identify with God, suffering potentially becomes easier.</div>
        <div>Simple sufferings are easy to process and resolve. Identifying with God is not even needed (although,  still more efficient)</div>
        <div>Intense sufferings may be easier to handle when identifying with God because you no longer are identifying with the body. Intense sufferings FEEL very rough on the body. If you identify with that, it can be the worst thing you have felt in your life.</div>
        <div>You still feel suffering when identifying with God, but it is less.</div>

      
      </div>

      
    </div>
  )
}

Suffer.layoutProps = {
  Layout: DefaultLayout,
}

export default Suffer
