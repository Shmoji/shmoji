import DefaultLayout from "components/layouts/DefaultLayout"

const Desires = () => {

  return (
    <div className="md:w-3/5 mx-auto mt-6">

      <div className="text-4xl font-bold mb-10 text-center">My Desires</div>

      <div className="">
        <ul className="list-disc">
          <li>If immortality is not achieved in my lifetime, I want to at least live a long life. More than 100 years.</li>
          <li>I want to find a girl that I can fall in love with forever.</li>
          <li>I want to understand all my health issues and then resolve all of them as much as is possible with humanity&apos;s current knowledge on those issues.</li>
          <li>I want creativity to become second nature for me. Right now, being creative is SO difficult. Almost paralyzing to get started.</li>
          <li>I want to become rich for the same obvious reason as anyone else. I don&apos;t want to be a slave anymore. I want to be able to do exactly what I want at anytime.</li>
        </ul>
      </div>

    </div>
  )
}

Desires.layoutProps = {
  Layout: DefaultLayout,
}

export default Desires
