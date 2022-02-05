import classNames from "classnames"
import A from "components/A"
import Header from "components/Header"
import { GetServerSideProps } from "next"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"

const textList = [
  { isAppend: false, text: 'A girl by the name of Ash paced around her room while lost in thought.' },
  { isAppend: false, text: '"I have the urge to create a YouTube video that tells a story."' },
  { isAppend: true, text: '"I don’t necessarily have any idea in mind, but constantly during the work week I get hints at possible material for stories."' },
  { isAppend: true, text: '"However, those hints always fade away."' },
  { isAppend: true, text: '"If I could just remember those it would be great…"' },
  { isAppend: false, text: 'Almost instantly she realized that no spectacular story was going to randomly appear in her mind.' },
  { isAppend: false, text: '"Oh well, I’ll just think of something completely new."' },
  { isAppend: true, text: '"No matter what, I still have have this strong energy pushing me to create something emotionally captivating."' },
  { isAppend: false, text: 'Ash thought of all kinds of different stories she could tell.' },
  { isAppend: true, text: 'Stories describing people she met.' },
  { isAppend: true, text: 'Stories about her own nuanced existence.' },
  { isAppend: true, text: 'Stories about some mysterious power.' },
  { isAppend: false, text: 'This process wasn’t new to Ash.' },
  { isAppend: true, text: 'The next step is that she will write the story idea in her notebook and never get back to it.' },
  { isAppend: true, text: 'Progress is made, but then some sort of barrier gets in the way.' },
  { isAppend: false, text: 'It’s not writers block like you would stereotypically think.' },
  { isAppend: true, text: 'It’s more like a virus.' },
  { isAppend: false, text: 'Ash flopped onto her bed face first while still thinking about how to formulate a complete story.' },
  { isAppend: true, text: 'She slowly rolled over so that she was now staring at the ceiling.' },
  { isAppend: true, text: 'She noticed the spinning of the ceiling fan caused some sort of visual effect that is not commonly seen in day-to-day life.' },
  { isAppend: true, text: 'Almost like the fan created the outline of a circle that just floated in mid air.' },
  { isAppend: true, text: 'Didn’t even look like there was anything moving.' },
  { isAppend: false, text: 'She thought about how it would be cool to share this with someone, but had no idea how to communicate that without sounding weird.' },
  { isAppend: true, text: 'She realized her thoughts had wandered and began thinking about the story again.' },
  { isAppend: false, text: 'At this point, she was now set on a particular idea for the story she wanted to tell.' },
  { isAppend: true, text: 'It was a fictional story about an ordinary college student that meets aliens on campus one night while on a walk.' },
  { isAppend: false, text: '"I want to start writing, but I just need to think through it all first…"' },
  { isAppend: false, text: 'At the end of that thought, Ash felt her body become paralyzed.' },
  { isAppend: true, text: 'She couldn’t move a limb, but she could move her eyes.' },
  { isAppend: true, text: 'With her back still to the bed, she looked around and saw a tall, skinny creature.' },
  { isAppend: true, text: 'It walked backwards out of her closet with its head twisted 90 degrees looking at her.' },
  { isAppend: true, text: 'The creature’s eyes were almost like the headlights of a car.' },
  { isAppend: false, text: 'In a raspy snake-like voice it said:' },
  { isAppend: true, text: '"The start and end need to be interesting."' },
  { isAppend: false, text: 'In a synchronized fashion, Ash’s lips forcefully followed every movement of the creature’s lips.' },
  { isAppend: true, text: 'They talked in unison, with the creature leading by force.' },
  { isAppend: false, text: 'Ash felt so much fear that she was in physical pain.' },
  { isAppend: true, text: 'She has always been known to be intelligent, so she began pondering every possible way to get out of this situation.' },
  { isAppend: false, text: 'The creature and her own mouth kept repeating:' },
  { isAppend: true, text: '"The start and end need to be interesting."' },
  { isAppend: false, text: 'She began to think about this phrase:' },
  { isAppend: true, text: '"Such a burdensome thing to think about."' },
  { isAppend: true, text: '"Silly time to think about it, but who enforces this rule?"' },
  { isAppend: true, text: '"Who says whether anything is interesting?"' },
  { isAppend: true, text: '"How do you measure how interesting the start and end are?"' },
  { isAppend: true, text: '"If it’s too boring at first, do you just scrap an interesting idea?"' },
  { isAppend: false, text: 'She snapped out of that train of thought and realized the creature was squatted down now.' },
  { isAppend: false, text: '"What was it doing?"' },
  { isAppend: false, text: '"Clearly it stopped talking…was that because I was pondering what it was saying?"' },
  { isAppend: false, text: 'The creature stood up again and said:' },
  { isAppend: true, text: '"There needs to be mystery."' },
  { isAppend: false, text: 'And again the words were forced into Ash’s mouth at the same time.' },
  { isAppend: false, text: 'This time she was ready to ponder.' },
  { isAppend: true, text: 'She also planned to watch the creature this time instead of getting lost in thought.' },
  { isAppend: false, text: '"I really do want some sort of complex mystery in all my stories."' },
  { isAppend: true, text: '"I want it to be like a puzzle that the readers or listeners need to figure out."' },
  { isAppend: false, text: 'The creature lifted its long arms up like it just gained power.' },
  { isAppend: true, text: 'Its fingers scraped the ceiling.' },
  { isAppend: false, text: 'Ash’s anxiety increased causing her brain to forcefully look for solutions to this dangerous situation.' },
  { isAppend: true, text: 'This time, instead of just thinking, she decided to speak her thoughts.' },
  { isAppend: false, text: '"But you know, maybe I don’t have control over the story I write."' },
  { isAppend: true, text: '"Maybe it just comes out and it will be the way that it is."' },
  { isAppend: true, text: '"Maybe there’s mystery, maybe there’s not."' },
  { isAppend: false, text: 'As Ash said this, she watched the creature and realized that she was leading now.' },
  { isAppend: true, text: 'The creature’s mouth was still moving in unison to hers, but she had control.' },
  { isAppend: false, text: 'The creature started to say something new, but before it even could, Ash cut it off and said:' },
  { isAppend: true, text: '"I know, the story apparently needs to be creative."' },
  { isAppend: true, text: '"This is the same as the last two you piece of shit."' },
  { isAppend: true, text: '"Who decides what is creative?"' },
  { isAppend: true, text: '"Can a human purposefully be creative?"' },
  { isAppend: true, text: '"Maybe they can, but I know I cannot."' },
  { isAppend: false, text: '"What I can do is sit down and let the information flow out of my mind and just get out of the way of it."' },
  { isAppend: true, text: '"I have no control over whether it will be considered creative or not."' },
  { isAppend: false, text: '"BUT one thing I have realized tonight is that I don’t like the feeling of dwelling over these stupid rules that I enforce on myself."' },
  { isAppend: true, text: '"The story in your mind that is trying to come out doesn’t need to be filtered."' },
  { isAppend: true, text: '"In fact, all your rules will just prevent you from ever getting those stories out."' },
  { isAppend: true, text: '"The self inflicted rules are a prison for information."' },
  { isAppend: false, text: '"These rules are spawned from the urge to control."' },
  { isAppend: true, text: '"You want your stories to be interesting."' },
  { isAppend: true, text: '"You want them to be creative and mysterious."' },
  { isAppend: true, text: '"BUT…"' },
  { isAppend: false, text: '"YOU."' },
  { isAppend: true, text: '"DON’T."' },
  { isAppend: true, text: '"DECIDE."' },
  { isAppend: true, text: '"THAT."' },
  { isAppend: false, text: '"So, note to self, stop acting like you have control."' },
  { isAppend: true, text: '"These rules mean nothing and only burden you."' },
  { isAppend: true, text: '"Plus, think about how awesome it feels when you just let the story come out authentically."' },
  { isAppend: true, text: '"Maybe other people won’t like it, but gosh, it’s such a rush to get the information out of the abstract world and into some sort of physical form."' },
  { isAppend: false, text: 'She walked up to the creature…' },
  { isAppend: false, text: 'And hugged it.' },
  { isAppend: true, text: 'In an instant it POOF-ed away.' },
  { isAppend: true, text: 'She knew it was still there in a way, but she was okay with that.' },
  { isAppend: false, text: 'Ash came back to reality.' },
  { isAppend: true, text: 'Her back to the bed.' },
  { isAppend: true, text: 'She moved her vision from the ceiling to the window.' },
  { isAppend: true, text: 'She felt like she just learned something important, but at the same time she felt…unproductive.' },
  { isAppend: false, text: '"Hmm, I’m gonna go play Animal Crossing."' },
]

type Props = {
  initialTextIndex: number
}

const Story1 = ({ initialTextIndex }: Props) => {
  const router = useRouter()

  const [textIndex, setTextIndex] = useState(0)
  const [savedIndex, setSavedIndex] = useState(null)  // This is index stored in localstorage
  const [text, setText] = useState([])
  const [isAnimRunning, setIsAnimRunning] = useState(true)

  const onBackPressed = (index: number) => {
    const newTextIndex = index - 1
    setTextIndex(newTextIndex)
    setSavedIndex(newTextIndex)
    const oldBookmarks = JSON.parse(localStorage.getItem('bookmarks')).filter(b => b.story !== 1) || []
    localStorage.setItem('bookmarks', JSON.stringify([{ story: 1, textIndex: newTextIndex }, ...oldBookmarks]))

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
    const oldBookmarks = JSON.parse(localStorage.getItem('bookmarks')).filter(b => b.story !== 1) || []
    localStorage.setItem('bookmarks', JSON.stringify([{ story: 1, textIndex: newTextIndex }, ...oldBookmarks]))

    // Change URL query param without page refresh using shallow
    router.push(`/stories/story1?textIndex=${textIndex}`, `/stories/story1?textIndex=${newTextIndex}`, { shallow: true })

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
      localStorage.setItem('bookmarks', JSON.stringify([{ story: 1, textIndex: initialTextIndex }, ...bookmarks.filter(b => b.story !== 1)]))
      setSavedIndex(initialTextIndex)
      onBackPressed(initialTextIndex + 1)
    } else {
      // On 1st load, if invalid or no text index is provided
      const savedIndex = bookmarks.find(bookmark => bookmark.story === 1)?.textIndex
      setSavedIndex(savedIndex)
    }
  }, [initialTextIndex])

  if (!isValidTextIndex) {
    return (
      <div className="min-h-screen py-20 bg-white dark:bg-dark3 dark:text-white">
        <Header />
        <div>
          <div className="w-screen h-screen overflow-hidden dark:bg-dark3">
            <div className="flex flex-col justify-center items-center space-y-6 pt-8">
              <div className="text-2xl font-bold">Self Inflicted Rules</div>
              <button className="bg-blue-600 text-white rounded p-3">
                <A href="/stories/story1?textIndex=0">Start from beginning</A>
              </button>
              {savedIndex !== null && (
                <button className="bg-blue-600 text-white rounded p-3">
                  <A href={`/stories/story1?textIndex=${savedIndex}`}>Continue where you left off</A>
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
            router.push(`/stories/story1?textIndex=${textIndex}`, `/stories/story1?textIndex=${textIndex - 1}`, { shallow: true })
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
          <A href="/stories/story1">Exit</A>
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

export default Story1

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      initialTextIndex: Number(context.query.textIndex),
    },
  }
}
