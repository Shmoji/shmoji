import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const mystery = () => {
  return (
    <div>
      <span>Photons hit your eyes as you read this text on a screen. These photons contain information that is transported to your brain. This squishy thing contains a family of neurons. Somehow this family creates your ego; your perception; what you probably consider to be you. They take in the photons and somehow understand the information.</span>
      <span>So...what actually makes you...you?</span>
    </div>
  )
}

mystery.layoutProps = {
  Layout: DefaultLayout,
}

export default mystery