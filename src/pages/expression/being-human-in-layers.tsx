import DefaultLayout from "components/layouts/DefaultLayout"

const BeingHumanInLayers = () => {
  return (
    <div className="w-2/4 mx-auto">

      <div className="flex flex-col space-y-1">
        {/* TODO: some sort of art to show self being highest order */}
        <div>Being Human in Layers</div>
      </div>

      
    </div>
  )
}

BeingHumanInLayers.layoutProps = {
  Layout: DefaultLayout,
}

export default BeingHumanInLayers
