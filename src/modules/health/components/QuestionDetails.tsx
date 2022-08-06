import A from "components/A"
import { QUESTION_URL_CODES } from "pages/health/questions/[questionURLCode]"

type Props = {
  questionURLCode: string
}

const QuestionDetails = ({ questionURLCode }: Props) => {

  return (
    <>
      {questionURLCode === QUESTION_URL_CODES.BRIDGE_OF_NOSE && (
        <div>
          {/* TODO: put image of my nose */}

          <div className="font-bold mb-2">What I feel:</div>
          <ul className="ml-5 list-disc">
            <li>Pain at bridge of nose. Typically 3/10 pain. Have it every single day for about a year.</li>
            <li>Pressure at bridge of nose. Feels like a weight was put inside my face. This typically bugs me more than the pain. The pressure is about 4/10 uncomfortable daily and sometimes gets to 9/10 uncomfortable on bad days. </li>
            <li>Pressure at bridge of nose gets worse when talking.</li>
            <li>Crackling sometimes comes out of nose. Often random. But sometimes it happens when I move a certain way. This seems to be sound coming from my sinuses, but why???</li>
            <li>My right nostril is ALWAYS blocked. Not completely, but if I try taking deep breathe in with other nostril closed, you can hear a sort of suction from it being blocked. Some days are worse than others. Almost always wake up with it more blocked than after waking.</li>
          </ul>

          <div className="font-bold mt-4 mb-2">What I see:</div>
          <ul className="ml-5 list-disc">
            <li>Growing rash on bridge of nose. Certain activities like talking for long periods of time causes it to become more red.</li>
          </ul>

          <div className="font-bold mt-4 mb-2">When this started:</div>
          <ul className="ml-5 list-disc">
            <li>~January 1, 2022. I had face pain before this, but not enough to note it down</li>
            <li>Starting around 2017, I had throat and jaw pain that affects my speech. Not sure if related, but thought I would mention that.</li>
          </ul>

          <div className="font-bold mt-4 mb-2">Drugs I have tried as solution:</div>
          <ul className="ml-5 list-disc">
            <li>Doctors had me try multiple different allergy meds. No luck. I already was pretty confident it was not allergies, but thought I would try anyway.</li>
            <li>Doctors had me try multiple different antibiotics (amoxicillan and Doxycycline). No luck. This makes me think it is most likely not an infection then.</li>
            <li>Tried antihistamines. Specifically, Claritin D. It helps with the feeling of inflammation under the skin, but only a little. Doesn&apos;t help with pain or pressure.</li>
            <li>Tried Flonase. It helps with pain and pressure a little bit, but only a bandage solution for keeping me out of ER.</li>
          </ul>

          <div className="font-bold mt-4 mb-2">Tests I have tried:</div>
          <ul className="ml-5 list-disc">
            <li>ENT looked up my nose and saw mild inflammation, but they seemed to think it was normal.</li>
            <li>2nd ENT looked up nose and saw a deviated septum. Waiting to hear how severe it is. They also saw inflammation.</li>
            <li>Got a brain CT scan. Everything normal, but mild mucus thickening in sinuses. Did not seem important to docs. I got this CT scan at ER because I woke up to what seemed like a seizure. Uncontrollable muscles freaking out.</li>
            <li>Got a brain MRI with and without contrast. Everything normal, but mild mucus thickening in sinuses. Docs said this is consistent with sinusitis, but that does not get me any closer to the root issue.</li>
          </ul>

          <div className="font-bold mt-4 mb-2">Diagnosis I have considered:</div>
          <ul className="ml-5 list-disc">
            <li>Sinusitis. I think I probably do have this, but it&apos;s not the root issue and I&apos;m determined to find and fix the root issue.</li>
            <li>Allergies of some sort. My prediction: 99% sure not allergies.</li>
            <li>Infection of some sort. My prediction: 99% sure not infection.</li>
            <li>Lupus. My prediction: idk, maybe, need tests from docs.</li>
            <li>Deviated septum that causes many symptoms. My prediction: 75% chance this is what is going on. If the septum is severely deviated, it can block proper breathing. This can lead to ALL kinds of issues all over the body.</li>
          </ul>

        </div>
      )}

      {questionURLCode === QUESTION_URL_CODES.EYES && (
        <div>

          <div className="font-bold mb-2">What I feel:</div>
          <ul className="ml-5 list-disc">
            <li>Top-right of my right eye (about where eyelid and eyebrow meet) sometimes feels swollen and heavy.</li>
            <li>Sometimes my vision gets blurry and I have to keep blinking to fix it.</li>
            <li>Sometimes my eyes get incredibly dry at night. But not during the day.</li>
            <li>Has happened about 3 times so far. Both eyes felt bruised. Felt like someone punched me in the eyes. Pain was 9/10</li>
          </ul>

          <div className="font-bold mt-4 mb-2">What I see:</div>
          <ul className="ml-5 list-disc">
            <li>Eye floater in left eye. Very visible in bright light. Had it since about 6/1/2022. This was around when eye pain hit a peak. Will update here if eye floater ever goes away.</li>
          </ul>

          <div className="font-bold mt-4 mb-2">When this started:</div>
          <ul className="ml-5 list-disc">
            <li>~May 30, 2022. I journaled a note about it feeling like my eyes were going to explode.</li>
          </ul>

          <div className="font-bold mt-4 mb-2">Drugs I have tried as solution:</div>
          <ul className="ml-5 list-disc">
            <li>Same as <A href="/health/questions/bridge-of-nose" className="text-blue-600">bridge of nose</A></li>
          </ul>

          <div className="font-bold mt-4 mb-2">Tests I have tried:</div>
          <ul className="ml-5 list-disc">
            <li>Same as <A href="/health/questions/bridge-of-nose" className="text-blue-600">bridge of nose</A></li>
          </ul>

          <div className="font-bold mt-4 mb-2">Diagnosis I have considered:</div>
          <ul className="ml-5 list-disc">
            <li>Same as <A href="/health/questions/bridge-of-nose" className="text-blue-600">bridge of nose</A></li>
          </ul>

        </div>
      )}

      {questionURLCode === QUESTION_URL_CODES.HEAD && (
        <div>

          <div className="font-bold mb-2">What I feel:</div>
          <ul className="ml-5 list-disc">
            <li>Consistent pressure around entire head everyday. Feels like I have a hat on. If I raise my eyebrows, I really feel the pressure at top of head.</li>
            <li>Feeling of sunburn under the skin around head. I think this is inflammation because it gets better with antihistamines.</li>
            <li>Skin on head is warm to touch. Not a fever, but locally warm.</li>
          </ul>

          <div className="font-bold mt-4 mb-2">What I see:</div>
          <ul className="ml-5 list-disc">
            <li>I don&apos;t know this for sure, but I swear top of my head is swollen. I have no proof of this, so take with grain of salt.</li>
          </ul>

          <div className="font-bold mt-4 mb-2">When this started:</div>
          <ul className="ml-5 list-disc">
            <li>~May 30, 2022. Head pain started around same time that eye pain started</li>
          </ul>

          <div className="font-bold mt-4 mb-2">Drugs I have tried as solution:</div>
          <ul className="ml-5 list-disc">
            <li>Same as <A href="/health/questions/bridge-of-nose" className="text-blue-600">bridge of nose</A></li>
          </ul>

          <div className="font-bold mt-4 mb-2">Tests I have tried:</div>
          <ul className="ml-5 list-disc">
            <li>Same as <A href="/health/questions/bridge-of-nose" className="text-blue-600">bridge of nose</A></li>
          </ul>

          <div className="font-bold mt-4 mb-2">Diagnosis I have considered:</div>
          <ul className="ml-5 list-disc">
            <li>Same as <A href="/health/questions/bridge-of-nose" className="text-blue-600">bridge of nose</A></li>
          </ul>

        </div>
      )}

      {questionURLCode === QUESTION_URL_CODES.BODY && (
        <div>

          <div className="font-bold mb-2">What I feel:</div>
          <ul className="ml-5 list-disc">
            <li>Muscles around entire body will feel sore and achy like I just finished a workout</li>
            <li>One time I did a small workout and felt sore for 2-3 weeks after, which has never happened to me. Was like my muscles didnt want to heal. This happened about May 30, 2022.</li>
          </ul>

          <div className="font-bold mt-4 mb-2">When this started:</div>
          <ul className="ml-5 list-disc">
            <li>~May 30, 2022. Head and eye pain started around same time as this</li>
          </ul>

        </div>
      )}

      
    </>
  )
}

export default QuestionDetails
