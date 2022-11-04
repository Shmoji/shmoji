import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"
import { QUESTION_URL_CODES } from "./[questionURLCode]"

const Questions = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/health" className="text-blue-600 mr-1 ml-1">health</A> / <A href="/health/solve" className="text-blue-600 mr-1 ml-1">solve</A> / <A href="/health/questions" className="ml-1">all questions</A>
      </div>

      <div className="text-4xl font-bold mb-2">Questions to Solve</div>

      <div className="text-sm italic mb-4">click each one for more details</div>

      <div className="md:w-3/5 flex flex-col justify-center items-center space-y-6">
        
        <A href={`/health/questions/${QUESTION_URL_CODES.BRIDGE_OF_NOSE}`} className="text-blue-600">
          Why do I feel pressure and pain just above bridge of nose?
        </A>

        <A href={`/health/questions/${QUESTION_URL_CODES.EYES}`} className="text-blue-600">
          Why do I have these eye problems?
        </A>

        <A href={`/health/questions/${QUESTION_URL_CODES.HEAD}`} className="text-blue-600">
          Why do I get bad head pain?
        </A>

        <A href={`/health/questions/${QUESTION_URL_CODES.BODY}`} className="text-blue-600">
          Why do I always feel sore and achy all over body?
        </A>

        {/* <A href={`/health/questions/${QUESTION_URL_CODES.KIDNEY}`} className="text-blue-600">
          Why do my kidneys hurt sometimes?
        </A> */}

        <A href={`/health/questions/${QUESTION_URL_CODES.BURN}`} className="text-blue-600">
          Why does my skin burn all over my body?
        </A>

      </div>

    </div>
  )
}

Questions.layoutProps = {
  Layout: DefaultLayout,
}

export default Questions
