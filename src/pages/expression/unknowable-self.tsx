import DefaultLayout from "components/layouts/DefaultLayout"

const UnknowableSelf = () => {
  return (
    <div className="w-2/4 mx-auto">

      <div className="flex flex-col space-y-1">
        Forever reaching for that which is untouchable.

        What am I? What is the self?
          
        Just when I think I have a tiny part of the answer, it dissipates.

        Feels like I&apos;m trying to understand something that cannot be understood with logic.

        Oddly enough, when you let yourself simply exist without logic, it feels like self. 

        But as soon as you ponder using logic, the self becomes untouchable again.

        Unknowable.
      </div>

      
    </div>
  )
}

UnknowableSelf.layoutProps = {
  Layout: DefaultLayout,
}

export default UnknowableSelf
