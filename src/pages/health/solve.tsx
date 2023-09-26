import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Solve = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/health" className="text-blue-600 mr-1 ml-1">health</A> / <div className="ml-1">solve</div>
      </div>

      <div className="text-4xl font-bold mb-4">Solve My Health Mystery</div>
      <div className="md:w-3/5 flex flex-col justify-center items-center space-y-6">
        
        <div className="font-bold italic">I have struggled with mysterious health issues for about 6 years now. Please help because the medical system sucks ass and can&apos;t figure anything out.</div>

        <A href="/health/questions" className="text-blue-600">❓ Questions to Solve</A>
        {/* <A href="/health/data" className="text-blue-600">📊 Health Data</A> */}

        {/* <A href="/health/issue-history" className="text-blue-600">History of Health Issues</A> */}

      </div>
    </div>
  )
}

Solve.layoutProps = {
  Layout: DefaultLayout,
}

export default Solve
