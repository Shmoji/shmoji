import classNames from "classnames"
import A from "components/A"
import Header from "components/Header"
import { GetServerSideProps } from "next"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"

const textList = [
  { isAppend: false, text: 'Everybody dies, that is just the cycle of life.' },
  { isAppend: true, text: 'However, that may change one day…' },
  { isAppend: false, text: 'During his junior year, a college student named Mason came dangerously close to dying.' },
  { isAppend: true, text: 'When he first started college, a random tightness appeared on the right side of his neck.' },
  { isAppend: true, text: 'Typically, he could just rub his neck and it would go away.' },
  { isAppend: true, text: 'However, a consistent pain throughout his jaw appeared too.' },
  { isAppend: true, text: 'Over time, both feelings got worse and worse.' },
  { isAppend: false, text: 'Mason was no fool, he was always at the top of his class. He knew it was time to see a doctor.' },
  { isAppend: true, text: 'After visiting many different types of doctors and being tested under various machines, there was nothing found.' },
  { isAppend: true, text: 'Mason was pretty certain that all the doctors believed he was making up the pain.' },
  { isAppend: true, text: 'He certainly was not.' },
  { isAppend: false, text: 'He continued with school even though his pain continued to get worse.' },
  { isAppend: true, text: 'One summer, he studied abroad in Japan while more symptoms developed.' },
  { isAppend: true, text: 'His muscles would spasm all over. His legs had the most spasms and started hurting so much that he could not explore Japan as much as he wanted to.' },
  { isAppend: true, text: 'Aside from the pain, his trip abroad was amazing.' },
  { isAppend: true, text: 'However, the pain made him realize that he needed to act since the doctors were no help.' },
  { isAppend: false, text: 'Mason researched all of his symptoms, but nothing quite fit.' },
  { isAppend: true, text: 'Some symptoms aligned with blood cancer, but he knew not to self diagnose.' },
  { isAppend: true, text: 'However, he knew he could not continue the rest of his life with intense, non-stop pain.' },
  { isAppend: false, text: 'As a man of science, he knew that human bodies are complex machines made of cells, atoms, and all kinds of biological mechanisms.' },
  { isAppend: true, text: 'Something was wrong with the fundamental pieces of his physical body.' },
  { isAppend: true, text: 'So, he decided it was best to treat it as if he did have cancer.' },
  { isAppend: false, text: 'There are stories online claiming that people have beat the worst stages of cancer with plant-based diets and cutting out added sugar.' },
  { isAppend: true, text: 'Yet, there is no real proof, those stories are all controversial.' },
  { isAppend: true, text: 'Mason had a few family members that died due to chemotherapy, so even if it was confirmed that he had cancer, he would never do that.' },
  { isAppend: false, text: 'Most vegetables contain antioxidants that make your immune system strong.' },
  { isAppend: true, text: 'The job of your immune system is to fight the villains of your body, so making it as strong as possible makes sense when it comes to fighting cancer.' },
  { isAppend: true, text: 'Plus, being healthy has no bad sides…' },
  { isAppend: true, text: 'Other than missing the taste of unhealthy foods.' },
  { isAppend: false, text: 'After six months of the diet containing mostly plants and beans, he finally noticed the pains in his body getting less severe.' },
  { isAppend: true, text: 'It took forever, but this filled Mason with hope of a future.' },
  { isAppend: false, text: 'This spark of hope was needed because when the pain was at its worse, he was certain of his demise.' },
  { isAppend: true, text: 'Due to this feeling of imminent death, he began pondering reality on a normal basis.' },
  { isAppend: false, text: 'Mason thought to himself:' },
  { isAppend: true, text: '"The universe does not need life."' },
  { isAppend: true, text: '"If we all died, the universe would continue on."' },
  { isAppend: true, text: '"However, we are all created from exploded star material, so we are the universe."' },
  { isAppend: true, text: '"There is no external meaning of life."' },
  { isAppend: true, text: '"It is up to each individual soul to choose their own reason to live."' },
  { isAppend: false, text: 'Mason decided to look at life like a video game.' },
  { isAppend: true, text: 'He was placed into this mysterious reality and he wanted to help discover how everything works, that was his reason for existence.' },
  { isAppend: true, text: 'He was interested in every aspect of reality, but hoped that he could help answer some of the big questions before dying.' },
  { isAppend: false, text: '"What or who created the universe? How was it created?"' },
  { isAppend: true, text: '"What happens to our consciousness when we die? Is it transferred to some other server or universe? Is this the same thing with sleeping?"' },
  { isAppend: true, text: '"Maybe when someone cannot sleep it is because all of the sleep servers are full."' },
  { isAppend: true, text: '"I guess the death servers are never full."' },
  { isAppend: true, text: '"Is consciousness completely a physical phenomena?"' },
  { isAppend: true, text: 'Mason thought curiously.' },
  { isAppend: false, text: 'Mason began studying the universe every single day. He was most interested in astronomy, physics, and quantum mechanics.' },
  { isAppend: true, text: 'He studied for about a year and then realized that he was forgetting everything that he learned.' },
  { isAppend: true, text: 'Due to this, he decided that he needed to study memorization methods.' },
  { isAppend: true, text: 'He learned all about recall and spaced repetition.' },
  { isAppend: false, text: '"If you read a few paragraphs of text, afterwards you will not be able to recall the entire text, just small chunks of information."' },
  { isAppend: true, text: '"The best way to learn must be to simplify information and recall more information from the simplified version by understanding relationships."' },
  { isAppend: true, text: '"Today I learned about quarks. I should be able to hear the word quark and recall the definition."' },
  { isAppend: true, text: '"Also, hearing the word quark should bring up the fact that they have a relationship with leptons. Quarks and leptons are classified as fermions which all have a spin of 1/2."' },
  { isAppend: false, text: 'Eventually, Mason realized that storing the information inside his own brain may end up being pointless.' },
  { isAppend: true, text: 'Storing all that information was fun, but it was not progressing anything other than his own knowledge base.' },
  { isAppend: true, text: 'He lived in order to help humans discover new aspects of the universe that are currently unknown.' },
  { isAppend: true, text: 'He did not live so that he could have the information inside of his own brain, that was not important.' },
  { isAppend: true, text: 'The discoveries themselves were important to him, so that the information would become available to everyone.' },
  { isAppend: false, text: 'Mason came to the conclusion that he needed to create a company with the goal of discovering new aspects of reality.' },
  { isAppend: true, text: 'Mason began thinking:' },
  { isAppend: false, text: '"If this universe has a creator, then there should be evidence showing that."' },
  { isAppend: true, text: '"Game developers create video games with glitches that are discovered by players. Maybe the creator of our universe left some accidental glitches…"' },
  { isAppend: true, text: '"like black holes."' },
  { isAppend: false, text: '"A group of people is needed in order to research this reality we live in and keep an eye out for glitches."' },
  { isAppend: true, text: '"Of course, I think in terms of technology, but the universe could be structured in a way that is nothing like technology."' },
  { isAppend: true, text: '"Realism is important, so searching for glitches will not be the only point of this organization."' },
  { isAppend: false, text: '"We will research all aspects of the universe with a main priority of making new discoveries."' },
  { isAppend: true, text: '"This is the main priority because new discoveries push the progression of science and technology, which in turn helps people in various ways - most importantly: relieving people of pain and saving lives."' },
  { isAppend: true, text: '"To summarize, this company will research the universe in order to make new discoveries that will better humanity for all."' },
  { isAppend: false, text: 'Mason, being a computer science major, created a decent website to get the point across. He did not know exactly how to attract people to the website.' },
  { isAppend: true, text: 'His best idea was to make the site a blog and post interesting articles about science, philosophy, and research.' },
  { isAppend: true, text: 'The site contained an about page explaining the true goal in mind for the company.' },
  { isAppend: true, text: 'He named it Our Mysterious Universe.' },
  { isAppend: false, text: 'One day, Mason received an email while sitting in class.' },
  { isAppend: true, text: 'Most lectures in college are pretty useless, so he read the email:' },
  { isAppend: false, text: '"Dear Our Mysterious Universe, I am Kim Fritz, creator of the Science League Foundation."' },
  { isAppend: true, text: '"Our sole purpose is to invest money into companies that can advance technology and research."' },
  { isAppend: true, text: '"You clearly have nothing to show other than desire. However, you are motivated and your ideas have potential."' },
  { isAppend: true, text: '"We will invest $100,000 if you are interested."' },
  { isAppend: true, text: '"Sincerely, Kim Fritz. "' },
  { isAppend: false, text: 'In the middle of the professor\'s lecture, Mason jumped out of his seat and left class in excitement.' },
  { isAppend: true, text: 'He returned to his apartment and replied to Kim as quickly as possible.' },
  { isAppend: false, text: 'Thankfully, this was Mason\'s last month of college. This month gave him time to receive the investment money and buy important resources.' },
  { isAppend: true, text: 'He rented a place to work and sleep in. He began searching for motivated people interested in the same goals laid out for the organization.' },
  { isAppend: true, text: 'Mason graduated and without hesitation, began working full-time on Our Mysterious Universe.' },
  { isAppend: false, text: 'The company was crawling with employees. It was hard to explain to the outer-world what was going on.' },
  { isAppend: true, text: 'Most people that worked there spent their time researching.' },
  { isAppend: true, text: 'Some employees researched black holes, stars, and galaxies.' },
  { isAppend: true, text: 'Some of them researched past discoveries of physics and quantum mechanics and then tried brainstorming ways to improve the science of the past to model reality more accurately.' },
  { isAppend: true, text: 'Many employees experimented with various substances in hopes of making random discoveries.' },
  { isAppend: false, text: 'Often, research ends up with no results, which does not look good to the public.' },
  { isAppend: true, text: 'Our Mysterious Universe was very open about everything going on, they believed in open source information.' },
  { isAppend: true, text: 'They posted articles almost daily about science and research, but they still had not found a steady source of income.' },
  { isAppend: false, text: 'That single investment kept them alive, but the money depleted quickly.' },
  { isAppend: true, text: 'Two more years passed.' },
  { isAppend: true, text: 'Throughout those years, the company struggled to survive, but exciting work continued to progress.' },
  { isAppend: false, text: 'The company had a team with the goal of discovering a unified theory of science and rumors were passed around that they MIGHT have discovered something insane.' },
  { isAppend: true, text: 'However, these rumors pervaded the company for years.' },
  { isAppend: true, text: 'Even Mason, as the CEO, had no idea if the rumors were true.' },
  { isAppend: true, text: 'He was so busy keeping up with every part of the company that he found it hard to keep up with everything.' },
  { isAppend: false, text: '3am on a Saturday, Mason woke up to his phone ringing.' },
  { isAppend: true, text: 'He answered it to hear Tyler, the manager of the unified theory of science team.' },
  { isAppend: false, text: '"MASON, WE DID IT."' },
  { isAppend: true, text: '"We have unified sciii…"' },
  { isAppend: true, text: '"WE HAVE UNIFIED EVERY ASPECT OF SCIENCE."' },
  { isAppend: true, text: '"There are patterns built into this universe that no one even knew about…"' },
  { isAppend: true, text: '"UNTIL NOW."' },
  { isAppend: false, text: 'Mason\'s heart thumped as if he was in the middle of a run.' },
  { isAppend: true, text: '"You have to show me Tyler."' },
  { isAppend: false, text: 'That day, Mason learned how all the fundamental forces are similar, yet different.' },
  { isAppend: true, text: 'He learned how quantum mechanics connects to large scale objects.' },
  { isAppend: true, text: 'The mysteries of gravity were solved.' },
  { isAppend: true, text: 'All this new information reminded him that the majority of our universe is not visual. We humans only see a small portion of what is actually going on…it is amazing.' },
  { isAppend: false, text: 'Before leaving work to go home, Mason left the company with a message:' },
  { isAppend: true, text: '"Make all of this information public immediately."' },
  { isAppend: true, text: '"The reason we made these discoveries in the first place was because we allowed anyone in the world access to our information."' },
  { isAppend: true, text: '"In return, people from all walks of life gave input. There has been teenagers living in poverty that affected the world by simply offering new ideas of how the universe works."' },
  { isAppend: true, text: '"So, who knows what will be discovered next once the world gets a hold of this unified theory."' },
  { isAppend: false, text: 'Mason got home that night and pondered the words that came out of his mouth.' },
  { isAppend: true, text: 'He had never even thought about rewarding the people around the world for their hard work.' },
  { isAppend: true, text: 'There was several times when the company hired people with amazing ideas, but not always.' },
  { isAppend: true, text: 'There must be some way to pay people for their creative ideas whenever they provide value for the company.' },
  { isAppend: false, text: 'Within the next year, the unified theory strengthened the company, bringing in multiple new investors.' },
  { isAppend: true, text: 'Our Mysterious Universe began employing more and more people.' },
  { isAppend: true, text: 'They rolled out their website for scientists trying to make money remotely with their creative ideas and discoveries.' },
  { isAppend: true, text: 'Trying to understand reality became mainstream.' },
  { isAppend: true, text: 'After only one year of the information being available, the humans of Earth came together to show the universe how amazing we truly are.' },
  { isAppend: false, text: 'Yet again, a huge discovery was made. A briefing of the discovery was about to be broadcasted live on YouTube, with Mason explaining the news.' },
  { isAppend: true, text: 'He prepared himself mentally to talk as he sat in front of the camera that was not yet running.' },
  { isAppend: true, text: 'Even though this company turned him into a social guy, he still got nervous in most social situations.' },
  { isAppend: true, text: '"We are live!"' },
  { isAppend: true, text: 'said some camera guy.' },
  { isAppend: false, text: '"Uh, hello everyone, I am Mason, the CEO of Our Mysterious Universe."' },
  { isAppend: true, text: '"As you may know, about a year ago, a unified theory of science was created. This theory seems to model reality perfectly."' },
  { isAppend: true, text: '"Due to this, we are able to see patterns in reality that have never before been recognized."' },
  { isAppend: true, text: 'Mason looked at Tyler and smiled.' },
  { isAppend: false, text: '"Thousands of people around the world saw these new discoveries as an opportunity for more discoveries."' },
  { isAppend: true, text: '"Also, they saw an opportunity to solve the greatest threat to humans…death."' },
  { isAppend: false, text: '"With new knowledge on how the fundamental forces affect the human body, scientists began all kinds of tests."' },
  { isAppend: true, text: '"They tested physical responses of the body to certain stimuli. At first, they thought maybe they could find some frequency of sound that could put the body in a state of rejuvenation."' },
  { isAppend: true, text: '"They kept testing with a reductionist mindset, only considering the inner physical components of the body."' },
  { isAppend: false, text: '"They never considered testing consciousness…"' },
  { isAppend: true, text: '"UNTIL some imaginative young man in India told them to."' },
  { isAppend: true, text: '"Even though we have no idea what it is physically, all human bodies contain a consciousness."' },
  { isAppend: false, text: '"So, we began testing on people that died of apparent old age. More specifically, people that died for no reason; they had no organs that failed."' },
  { isAppend: true, text: '"Obviously, their hearts stopped beating, but it was not because of a heart issue."' },
  { isAppend: true, text: '"Their hearts showed no signs of why they stopped, it was almost like the hearts had chosen to stop…"' },
  { isAppend: true, text: '"or the consciousness told them to stop."' },
  { isAppend: false, text: '"We began examining the brain because that is THE location when considering consciousness."' },
  { isAppend: true, text: '"Due to a new understanding of fundamental particles and light, scientists discovered a portion of the brain that correlates with beliefs."' },
  { isAppend: true, text: '"Everything that a person believes is stored using electromagnetic radiation in that part of the brain."' },
  { isAppend: true, text: '"However, the belief is only retrieved when needed and cannot be retrieved if the person is dead because the brain is no longer generating power."' },
  { isAppend: false, text: '"The scientists remembered how it seemed as if these people chose to die. Almost like they believed it was time to die."' },
  { isAppend: true, text: '"Did the belief cause their death?"' },
  { isAppend: true, text: '"With these thoughts in mind, we studied people who were alive to see if certain beliefs could be represented using light…"' },
  { isAppend: true, text: '"and they could."' },
  { isAppend: false, text: '"After this, we tried producing the belief that "I am alive" inside of a person\'s mind that had just died in the past 24 hours."' },
  { isAppend: true, text: '"Miraculously, the person came back to life."' },
  { isAppend: true, text: '"If the brain truly believes that it is alive, then it is true."' },
  { isAppend: true, text: '"This person died again right after because the belief vanished."' },
  { isAppend: true, text: '"Inhumane, we know, but all test subjects agreed to do this for science. This test was groundbreaking itself, but it did not stop there."' },
  { isAppend: false, text: '"The major test was related to aging. Producing the belief that "I will no longer age" in someone that was alive seemed to have no effect."' },
  { isAppend: true, text: '"As you see, science is a long chain of events, each leading to the next step."' },
  { isAppend: true, text: '"After that, we developed a chip that must be inserted into the head. This chip sends light waves into your head, forcing you to have a certain belief at all times."' },
  { isAppend: true, text: '"Eventually, your mind truly believes it and no longer needs the chip."' },
  { isAppend: false, text: '"Over this past year, we observed the cells on our test subject\'s body; none of them seemed to die."' },
  { isAppend: true, text: '"This technology and science is mind-blowing, I still cannot believe it."' },
  { isAppend: false, text: '"This technology could be the end of the world if in the wrong hands."' },
  { isAppend: true, text: '"However, we believe that it may stop the threat of aging forever."' },
  { isAppend: true, text: '"I cannot deny, much of what we do seems sketchy, especially to everyone not involved. However, our goal is ALWAYS to continue researching the unknown in order to better humanity and save millions of lives through scientific discoveries."' },
  { isAppend: false, text: '"If you have even a tiny bit of interest in our universe, love helping people, or do not know what you are doing in life - please consider science."' },
  { isAppend: true, text: '"Nobody knows how the universe was created. Nobody knows what happens when we die."' },
  { isAppend: true, text: '"However, we do know that millions of people on this planet have found happiness in being alive."' },
  { isAppend: true, text: '"So, let\'s try and give the option to extend life as long as possible for as many people as possible."' },
  
]

type Props = {
  initialTextIndex: number
}

const Story2 = ({ initialTextIndex }: Props) => {
  const router = useRouter()

  const [textIndex, setTextIndex] = useState(0)
  const [savedIndex, setSavedIndex] = useState(null)  // This is index stored in localstorage
  const [text, setText] = useState([])
  const [isAnimRunning, setIsAnimRunning] = useState(true)

  const onBackPressed = (index: number) => {
    const newTextIndex = index - 1
    setTextIndex(newTextIndex)
    setSavedIndex(newTextIndex)
    const oldBookmarks = JSON.parse(localStorage.getItem('bookmarks')).filter(b => b.story !== 2) || []
    localStorage.setItem('bookmarks', JSON.stringify([{ story: 2, textIndex: newTextIndex }, ...oldBookmarks]))

    // If prev text is append, then go back until not append and display all of that as text list
    if (textList[newTextIndex].isAppend) {
      let loopedList = []

      // On page load, text is empty, so cannot use this 1st condition
      if (text.length !== 0 && textList[index].isAppend) {
        loopedList = text
        loopedList.pop()
      } else {
        let i = newTextIndex
        while (textList[i].isAppend) {
          loopedList.push(textList[i].text)
          --i
        }
        // Need to push the false isAppend at end since loop quit out on it
        loopedList.push(textList[i].text)
        loopedList.reverse()
      }
      
      setText(loopedList)
    } else {
      setText([textList[newTextIndex].text])
    }
  }

  const onNextPressed = () => {
    // If animation running, end it
    if (isAnimRunning) {
      setIsAnimRunning(false)
      return
    }
    
    const newTextIndex = textIndex + 1
    setTextIndex(newTextIndex)
    setSavedIndex(newTextIndex)
    const oldBookmarks = JSON.parse(localStorage.getItem('bookmarks')).filter(b => b.story !== 2) || []
    localStorage.setItem('bookmarks', JSON.stringify([{ story: 2, textIndex: newTextIndex }, ...oldBookmarks]))

    // Change URL query param without page refresh using shallow
    router.push(`/stories/story2?textIndex=${textIndex}`, `/stories/story2?textIndex=${newTextIndex}`, { shallow: true })

    const newText =
      textList[newTextIndex].isAppend
      ? [...text, textList[newTextIndex].text]
      : [textList[newTextIndex].text]

    setText(newText)

    setIsAnimRunning(true)
  }

  const onAnimStart = () => {}

  const onAnimEnd = () => {
    setIsAnimRunning(false)
  }

  const isValidTextIndex = initialTextIndex !== null && initialTextIndex >= 0 && initialTextIndex < textList.length

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
    if (isValidTextIndex) {
      localStorage.setItem('bookmarks', JSON.stringify([{ story: 2, textIndex: initialTextIndex }, ...bookmarks.filter(b => b.story !== 2)]))
      setSavedIndex(initialTextIndex)
      onBackPressed(initialTextIndex + 1)
    } else {
      // On 1st load, if invalid or no text index is provided
      const savedIndex = bookmarks.find(bookmark => bookmark.story === 2)?.textIndex
      setSavedIndex(savedIndex ? savedIndex : null)
    }
  }, [initialTextIndex])

  if (!isValidTextIndex) {
    return (
      <div className="min-h-screen py-20 bg-white dark:bg-dark3 dark:text-white">
        <Header />
        <div>
          <div className="w-screen h-screen overflow-hidden dark:bg-dark3">
            <div className="flex flex-col justify-center items-center space-y-6 pt-8">
              <div className="text-2xl font-bold">Life, Death, and Science - A Short Story</div>
              <button className="bg-blue-600 text-white rounded p-3">
                <A href="/stories/story2?textIndex=0">Start from beginning</A>
              </button>
              {savedIndex !== null && (
                <button className="bg-blue-600 text-white rounded p-3">
                  <A href={`/stories/story2?textIndex=${savedIndex}`}>Continue where you left off</A>
                </button>
              )}
              <button className="bg-red-600 text-white rounded p-3">
                <A href="/stories">See all stories</A>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-screen h-screen overflow-hidden dark:bg-gray-900">
      <div className="w-full flex justify-center pt-8">
        <button
          onClick={() => {
            // Change URL query param without page refresh using shallow
            // Putting push outside onBackPressed since it is also used on page load with different values
            router.push(`/stories/story2?textIndex=${textIndex}`, `/stories/story2?textIndex=${textIndex - 1}`, { shallow: true })
            onBackPressed(textIndex)
          }}
          disabled={textIndex <= 0}
          className={classNames(
            textIndex <= 0 ? 'bg-gray-200 text-black cursor-not-allowed' : 'bg-blue-600 text-white',
            "p-3 rounded mr-2"
          )}
        >
          Back
        </button>
        <button className="p-3 rounded mr-2 bg-red-500 text-white">
          <A href="/stories/story2">Exit</A>
        </button>
        <button
          onClick={onNextPressed}
          disabled={textIndex >= (textList.length - 1)}
          className={classNames(
            textIndex >= (textList.length - 1) ? 'bg-gray-200 text-black cursor-not-allowed' : 'bg-blue-600 text-white',
            "p-3 rounded"
          )}
        >
          Next
        </button>
      </div>
      <div className="h-full pt-4 md:pt-8">
        <div className="mx-4 md:ml-20 md:w-3/4 text-lg text-white">
          {text.map((t) => {
            return (
              <div className="mb-4" key={t}>
                <span
                  className={classNames(
                    isAnimRunning && t === textList[textIndex].text ? "typed-out" : 'typed-out-done'
                  )}
                  style={{ "--n": t.length } as React.CSSProperties}
                  onAnimationStart={onAnimStart}
                  onAnimationEnd={onAnimEnd}
                >
                  {t}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Story2

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      initialTextIndex: Number(context.query.textIndex),
    },
  }
}
