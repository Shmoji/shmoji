import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"
import DefaultLayout from "components/layouts/DefaultLayout"
import { useState } from "react"

const History = () => {
  const [Dates, setDates] = useState([
    {
      date: '1/1/2022',
      isOpen: false,
      content: [
        'ACTION: I went to FastMed and got rapid covid test. It was negative.',
        'FEELING: From upper stomach to nose, I feel pressure. When I breath in, I feel it even more. Also I feel tingly feeling there, which my mind relates to breathing issues.',
        'FEELING: As this happens, my heartburn is killing me. This has all been happening for days, but today sucks.',
        'DR: Urgent care DR put pressure on upper stomach and it was uncomfortable. She said that sounds like gastritis. Need to follow up with primary DR to see if ulcer or something.',
        'FEELING: Have been burping and hiccuping a lot',
        'FEELING: If I get good breath in, sometimes I get popping sound in my nose. Kind of rare though. The popping tends to be associated with relief',
        'FEELING: Not as hungry as usual. Pretty sure this was side effect of Pepcid',
      ],
    },
    {
      date: '1/2/2022',
      isOpen: false,
      content: [
        'FEELING: Got really bad pain in left-back head for one second. Was sharp pain. Then, i got really hot all over. Not sure if because body went into panic mode or what. Wonder if caused by my health issue? I can say that isn\'t normal, even for health issues i usually have. I am also taking Pepcid right now, so could be some sort of side effect of it',
      ],
    },
    {
      date: '1/3/2022',
      isOpen: false,
      content: [
        'FEELING: pain and pressure in stomach/chest have not gotten any better',
        'DR: saw Dr Bedair at Duke Outpatient Clinic. I assumed since my pain was about 10/10, this would be the time we figure it out. Nope. She wants me to take pantoprazole for 1 month and report back. After research, seems this drug treats nothing, but can lessen symptoms. Seems short-term and pointless.',
        'TODO: she also wants me to return some poop to test for H pylori infection. This infection can cause ulcers and stomach issues.',
        'TODO: she also wants me to get blood taken to test for liver issues or pancreas issues. ',
      ],
    },
    {
      date: '1/4/2022',
      isOpen: false,
      content: [
        'DR: went to Quest Diagnostics to draw blood for Inside Tracker. Will give insights to all sorts of biomarkers and data in my body.',
        'DR: DR asked if I was cold. I told her I am always cold, which is true. I didn\'t used to always be coold like this.',
        'DR: she asked if I was cold because under my nails was blue/purple. She said to check my B12',
        'DR: when she took blood, she thinks she hit a nerve. My fingers were twitching uncontrollably and needle hurt. Twitching in fingers I got there was very similar to slight finger twitching I get day-to-day'
      ],
    },
    {
      date: '1/5/2022',
      isOpen: false,
      content: [
        'FEELING: Pressure and pain in chest has not been great today. Almost worse than ever before.',
        'FEELING: Seems more of the pressure and pain left my upper stomach and is now going from bottom to mid-chest.',
        'FEELING: Of course, the more pressure, the harder it is to breathe, which is terrifying',
        'FEELING: Also noticed with certain movements, feels like something just under skin of my chest pops',
        'FEELING: Fingers on left hand have felt very twitchy. They aren\'t twitching like crazy or anything, but they feel like I don\'t have as much control over them as usual, if that makes sense',
      ],
    },
    {
      date: '1/6/2022',
      isOpen: false,
      content: [
        'DR: got Lasik. This is a whole ass story, but not helpful in figuring out my health issues.',
      ],
    },
    {
      date: '1/7/2022',
      isOpen: false,
      content: [
        'FEELING: Whenever I drink something warm or cold, I feel it on the left side of my chest as it goes down.',
      ],
    },
    {
      date: '1/8/2022',
      isOpen: false,
      content: [
        'THOUGHT: Ran on treadmill for 20 minutes at 4.5. This was 1st time I felt good enough to run in about a month.',
        'FEELING: The thing that made me stop running is that I get pressure in my chest mainly and stomach a little.',
        'FEELING: During run, sometimes chest hurts. Also, kind of heart burn feeling on left chest',
        'FEELING: Also noticed throat started out dry and then near end of run I had mucus in my throat so bad that it was nearly choking me.'
      ],
    },
  ])

  const toggleDate = (dateIndex) => {
    const filteredDates = [...Dates]
    filteredDates[dateIndex] = {...Dates[dateIndex], isOpen: !Dates[dateIndex].isOpen }
    setDates(filteredDates)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-4">History of Health Issues</div>
      <div className="md:w-3/5 flex flex-col items-start space-y-6">
        {Dates.map((dateObj, dateObjInd) => {
          return (
            <div key={dateObj.date}>
              <div onClick={() => toggleDate(dateObjInd)} className="flex cursor-pointer text-blue-500">
                <span className="mr-2">{dateObj.date}</span>
                {dateObj.isOpen ? <ChevronUpIcon className="w-5" /> : <ChevronDownIcon className="w-5" />}
              </div>
              {dateObj.isOpen && (
                <ul className="ml-5 list-disc">
                  {dateObj.content.map((c, ind) => (
                    <li key={ind}>{c}</li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

History.layoutProps = {
  Layout: DefaultLayout,
}

export default History
