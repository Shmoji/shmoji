import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"
import QuestionDetails from "modules/health/components/QuestionDetails"
import { useRouter } from "next/dist/client/router"

export enum QUESTION_URL_CODES {
  BRIDGE_OF_NOSE = 'bridge-of-nose',
  EYES = 'eyes',
  HEAD = 'head',
  BODY = 'body',
}

const SpecificQuestion = () => {
  const router = useRouter()
  const { questionURLCode } = router.query as { questionURLCode: string }

  const getQuestionSummary = () => {
    if (questionURLCode === QUESTION_URL_CODES.BRIDGE_OF_NOSE) {
      return 'Why do I feel pressure and pain just above bridge of nose?'
    }
    if (questionURLCode === QUESTION_URL_CODES.EYES) {
      return 'Why do I have these eye problems?'
    }
    if (questionURLCode === QUESTION_URL_CODES.HEAD) {
      return 'Why do I get bad head pain?'
    }
    if (questionURLCode === QUESTION_URL_CODES.BODY) {
      return 'Why do I sometimes feel sore and achy all over body?'
    }
  }

  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/health" className="text-blue-600 mr-1 ml-1">health</A> / <A href="/health/solve" className="text-blue-600 mr-1 ml-1">solve</A> / <A href="/health/questions" className="text-blue-600 mr-1 ml-1">all questions</A> / <div className="ml-1">question</div>
      </div>

      <div className="text-4xl font-bold mb-6">{getQuestionSummary()}</div>

      <div className="md:w-3/5 flex flex-col justify-center items-center space-y-6">

        <QuestionDetails questionURLCode={questionURLCode} />

      </div>

    </div>
  )
}

SpecificQuestion.layoutProps = {
  Layout: DefaultLayout,
}

export default SpecificQuestion
