import classNames from "classnames"
import A from "components/A"
import Header from "components/Header"
import { GetServerSideProps } from "next"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"

const textList = [
  { isAppend: false, text: 'Sometime throughout my years on this rock called Earth, I made a creeping discovery.' },
  { isAppend: true, text: 'Reality has a precisely-defined structure, just like a computer program.' },
  { isAppend: true, text: 'To explain, let’s start with a question:' },
  { isAppend: true, text: 'What is a human?' },
  { isAppend: true, text: 'Well, that is complex, but this is the question to ask because each one of us is human.' },
  { isAppend: true, text: 'We experience being human every single day.' },
  { isAppend: true, text: 'Our reality is this experience and it can be defined and understood.' },
  { isAppend: false, text: 'So, back to the question:' },
  { isAppend: true, text: 'What is a human?' },
  { isAppend: true, text: 'To give you a hint, one interpretation is that a human is information.' },
  { isAppend: true, text: 'But let’s explain that from first principles.' },
  { isAppend: false, text: 'From a physical perspective, a human is just a configuration of atoms.' },
  { isAppend: true, text: 'The same atoms that make up everything else.' },
  { isAppend: false, text: 'Before life existed here, there was just a big rock.' },
  { isAppend: true, text: 'The atoms on this rock would move around for various reasons.' },
  { isAppend: true, text: 'Mostly random meaningless reasons.' },
  { isAppend: true, text: 'For example, a meteorite impact or wind.' },
  { isAppend: false, text: 'In the beginning, the atoms had no goal and every action was based on their physical history of actions.' },
  { isAppend: true, text: 'However, at some point, you can start assigning goals to the actions of atoms.' },
  { isAppend: false, text: 'From randomness, the first cell is created.' },
  { isAppend: true, text: 'An organism is born.' },
  { isAppend: false, text: 'Each and every one of these organisms use energy to perform actions.' },
  { isAppend: true, text: 'They perform actions in order to accomplish some goal.' },
  { isAppend: true, text: 'Even single-celled organisms.' },
  { isAppend: true, text: 'Maybe the organism isn’t conscious of the goal, but there is definitely a goal despite that.' },
  { isAppend: false, text: 'With a goal at hand, things are now less random.' },
  { isAppend: true, text: 'There’s a logical reason for the actions performed by the atoms.' },
  { isAppend: true, text: 'It’s not just meaningless action.' },
  { isAppend: false, text: 'Skip forward a bit and it’s the same thing with fish.' },
  { isAppend: true, text: 'They perform actions with the goal of survival and reproduction.' },
  { isAppend: true, text: 'This is how it is for most creatures that appear less conscious.' },
  { isAppend: false, text: 'At some point, as consciousness increases, the goals become desires.' },
  { isAppend: false, text: 'You can clearly see cats and dogs differ from fish.' },
  { isAppend: true, text: 'Go watch dogs play at the dog park. Seems like they play because it’s fun.' },
  { isAppend: true, text: 'My childhood dog used to bark at me until I would get off my butt and play with her.' },
  { isAppend: true, text: 'She WANTED to play. She desired it.' },
  { isAppend: false, text: 'You could argue that there are deeper reasons than dogs just want to play for fun.' },
  { isAppend: true, text: 'Maybe they need fun for survival.' },
  { isAppend: true, text: 'Despite that, I can guarantee if a dog could talk, they wouldn’t say they want to go play because of impending death.' },
  { isAppend: true, text: 'They want to have some fun.' },
  { isAppend: false, text: 'In fact, we humans are not very different from dogs in this scenario.' },
  { isAppend: true, text: 'Main difference is that our reasons for actions are much more complex.' },
  { isAppend: false, text: 'Why did you go out drinking with friends?' },
  { isAppend: true, text: 'Clearly alcohol will make you die quicker, so it’s probably not for survival.' },
  { isAppend: false, text: 'You can make the same argument that human X took action A because fundamentally it has to do with survival.' },
  { isAppend: true, text: 'Maybe that’s the case, but it doesn’t FEEL that way as a human.' },
  { isAppend: true, text: 'If it does, you’re probably not happy.' },
  { isAppend: false, text: 'Humans, more than any other known creature, seem to perform actions because of desires.' },
  { isAppend: false, text: 'I went and got a drink because I was thirsty and wanted a drink.' },
  { isAppend: true, text: 'Consuming this liquid prevents me from dying, but the reason I consumed it was simply because I wanted to.' },
  { isAppend: false, text: 'I went to college because I wanted to gain more life experiences.' },
  { isAppend: true, text: 'This could be broken into several sub-desires, but I think you get the point.' },
  { isAppend: false, text: 'We humans want things.' },
  { isAppend: true, text: 'Due to that, we are a pile of atoms that perform actions.' },
  { isAppend: false, text: 'To continue, you need to know what raw input is and you need to know what an observer is.' },
  { isAppend: false, text: 'Raw input is anything you observe using your senses.' },
  { isAppend: true, text: 'Even though it feels like the raw input is external to you, everything you experience is a certain configuration of your mind.' },
  { isAppend: true, text: 'Maybe the raw input was generated from something external, but in order for you to consume the input, your mind has to create a representation of the input in your own unique language.' },
  { isAppend: false, text: 'At this moment in time, you cannot truly know anything that is external to you.' },
  { isAppend: true, text: 'However, you can know the representation that your mind creates for that external entity.' },
  { isAppend: true, text: 'Okay, raw input is everything that is observed by you, but what is this thing that observes?' },
  { isAppend: false, text: 'An observer is YOU at the most fundamental level.' },
  { isAppend: true, text: 'Well, your thoughts, emotions, and body all change over time; sometimes dramatically.' },
  { isAppend: true, text: 'However, one thing stays the same.' },
  { isAppend: true, text: 'You are always observing the events of your life.' },
  { isAppend: false, text: 'You observe the sun rise in the sky.' },
  { isAppend: true, text: 'You observe a thought appear in your mind as you lay in bed at night.' },
  { isAppend: true, text: 'You observe a physical sensation when touching a hot coffee cup.' },
  { isAppend: false, text: 'At some point, the sack of atoms gained the ability to observe and that doesn’t mean eye sight.' },
  { isAppend: true, text: 'It gained the ability to intake raw input and store the external world as a representation in the mind.' },
  { isAppend: false, text: 'This changed things dramatically because it allowed a non-physical world to explode.' },
  { isAppend: true, text: 'The amount of representations keeps increasing.' },
  { isAppend: true, text: 'It’s almost as if the representations in the mind have become the most useful raw input.' },
  { isAppend: false, text: 'Continuing on, let’s define data and information.' },
  { isAppend: false, text: 'Data is raw input that is stored in memory as a representation.' },
  { isAppend: true, text: 'It is not true or untrue. It just exists.' },
  { isAppend: true, text: 'Every moment, you are taking in data.' },
  { isAppend: false, text: 'In fact, your ego is data.' },
  { isAppend: true, text: 'You can tell because you can easily observe your ego.' },
  { isAppend: true, text: 'Lay down and close your eyes.' },
  { isAppend: true, text: 'You’ll be able to observe randomly-appearing thoughts and maybe emotions too if you’re currently experiencing any.' },
  { isAppend: false, text: 'A lot of times, ego data is going to feel like information.' },
  { isAppend: false, text: 'Information is just USEFUL data.' },
  { isAppend: true, text: 'In order for something to be useful, you need desire. You want something.' },
  { isAppend: true, text: 'What actions can be taken to get what you want?' },
  { isAppend: true, text: 'Information will help you find the way to an answer.' },
  { isAppend: false, text: 'If you think about it, data never existed until there was an observer with the ability to persist that raw input across time as a representation.' },
  { isAppend: false, text: 'Creatures that are probably not even considered conscious, started to store data at some point.' },
  { isAppend: true, text: 'They used the data to help perform actions that accomplished goals.' },
  { isAppend: true, text: 'They had no desires, so the data was not useful, even though it may seem that way to us due to anthropomorphizing.' },
  { isAppend: false, text: 'Then came along the conscious creatures that had desires. They wanted things.' },
  { isAppend: true, text: 'So, they stored information in order to get what they want through action.' },
  { isAppend: false, text: 'Okay, let’s summarize.' },
  { isAppend: false, text: 'In the beginning we were just random meaningless atoms…which is weird to think about.' },
  { isAppend: true, text: 'Raw input, data, and information did not exist at this point.' },
  { isAppend: false, text: 'Then, the atoms became less random and more organized.' },
  { isAppend: true, text: 'Not exactly sure why; but funny enough, it was probably random that organization happened.' },
  { isAppend: true, text: 'The atoms formed the first cell and began performing actions to accomplish goals.' },
  { isAppend: false, text: 'At some point, these more organized atoms gained the ability to observe.' },
  { isAppend: true, text: 'Maybe due to the new physical ability to store raw input as a representation in a brain.' },
  { isAppend: true, text: 'Probably more complex than that though.' },
  { isAppend: false, text: 'There’s a good chance that fish, cats, and dogs all have this ability to observe.' },
  { isAppend: true, text: 'As the ability to observe increases, the more the sack of atoms begins to desire or want things.' },
  { isAppend: true, text: 'Dogs want things.' },
  { isAppend: true, text: 'Humans want things.' },
  { isAppend: false, text: 'With this new ability to observe came new aspects of reality.' },
  { isAppend: true, text: 'Raw input, data, information, and time.' },
  { isAppend: true, text: 'Maybe they were already there in the beginning, but simply couldn’t be unlocked until an observer existed.' },
  { isAppend: false, text: 'Having an observer means that the sacks of atoms can now learn.' },
  { isAppend: true, text: 'Atoms can take in other atoms or waves as input and store the data over time.' },
  { isAppend: true, text: 'These atoms became aware of what they are.' },
  { isAppend: false, text: 'Humans continue to store more and more raw input of the external world as representations in the mind.' },
  { isAppend: false, text: 'At this point in time, we need to keep asking questions.' },
  { isAppend: true, text: 'We need to keep trying to figure out what we truly are.' },
  { isAppend: true, text: 'We should ask ourselves:' },
  { isAppend: true, text: '"What information is the most useful?"' },
  { isAppend: false, text: 'What information is most useful at the individual level and the collective level?' },
  { isAppend: true, text: 'What information promotes health for all?' },
  { isAppend: true, text: 'What information will help us make death optional?' },
  { isAppend: true, text: 'What information will optimize for innocent fun that doesn’t feast upon others?' },
  { isAppend: false, text: 'The most useful information of reality is what humanity is.' },
  { isAppend: true, text: 'The most useful information stored in a single brain is what a human is.' },
  { isAppend: false, text: 'As we see with the Russian government, sometimes a single brain can bring down the collective with information that is individually useful, but not useful for humanity.' },
  { isAppend: true, text: 'One single mind that needs a software update to optimize for better information.' },
  { isAppend: false, text: 'Despite that, I have hope.' },
  { isAppend: true, text: 'Just like data and time, I often wonder what aspects of reality will be unlocked as humanity progresses.' },
  { isAppend: true, text: 'Exciting to think about!' },
  { isAppend: false, text: 'Honestly, I had planned for this to be a fictional story about a reality structured in a way that can be replicated by computer code, but I ended up sharing the information stored in my mind representing my own observed reality.' },
  { isAppend: true, text: 'I hope something in this text clicked with you and best wishes on whatever life journey you are on.' },

]

type Props = {
  initialTextIndex: number
}

const Story3 = ({ initialTextIndex }: Props) => {
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
    router.push(`/stories/story3?textIndex=${textIndex}`, `/stories/story3?textIndex=${newTextIndex}`, { shallow: true })

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
              <div className="text-2xl font-bold">Reality from the Perspective of a Human</div>
              <button className="bg-blue-600 text-white rounded p-3">
                <A href="/stories/story3?textIndex=0">Start from beginning</A>
              </button>
              {savedIndex !== null && (
                <button className="bg-blue-600 text-white rounded p-3">
                  <A href={`/stories/story3?textIndex=${savedIndex}`}>Continue where you left off</A>
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
            router.push(`/stories/story3?textIndex=${textIndex}`, `/stories/story3?textIndex=${textIndex - 1}`, { shallow: true })
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
          <A href="/stories/story3">Exit</A>
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

export default Story3

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      initialTextIndex: Number(context.query.textIndex),
    },
  }
}
