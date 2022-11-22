import DefaultLayout from "components/layouts/DefaultLayout"

const RentAFriend = () => {

  return (
    <div className="w-full md:w-2/4 mx-auto">

      <div className="">

        <div className="text-3xl font-bold">🙂 RENT ME AS A FRIEND 🙂</div>

        <div className="mt-4">💸 COST: $20 per hour 💸</div>
        <div className="mt-2">📧 MY EMAIL: shmoji@protonmail.com 📧</div>

        <div className="text-lg font-bold mt-4">How it works:</div>

        <ol className="ml-5 list-decimal">
          <li>Determine if you truly want to spend $20 per hour to hangout with a loser.</li>
          <li>If you are sure, then email me your name, age, and social media so I can do a background check.</li>
          <li>I will respond back with more details and schedule a call so I can get to know you.</li>
          <li>If everything is good after the call, I will send you a contract to sign to protect me legally in event of bad client. Then, I will send you a venmo link where you will pay for the upcoming hangout.</li>
          <li>We will then hangout. Hello fren. Simple as that.</li>
        </ol>

        <div className="text-lg font-bold mt-4">What I prefer:</div>

        <ul className="ml-5 list-disc">
          <li>A friend that enjoys hanging out while doing separate activities. I love when I can get work done on my computer while hanging out with friends.</li>
          <li>A friend that enjoys the company of others, but does not expect any conversation.</li>
        </ul>

        <div className="text-lg font-bold mt-4">Strict rules and terms:</div>

        <ul className="ml-5 list-disc">
          <li>I will ONLY hangout with you. Nothing else. This means I do not even have to talk to you if that is my desire. (But I will because I&apos;m a social person)</li>
          <li>I am not licensed to do anything. I am not certified in anything. I just want to help people. Even then, there is no guarentee what I offer will help.</li>
        </ul>

        <div className="text-lg font-bold mt-4">Why I want to do this:</div>

        <ul className="ml-5 list-disc">
          <li>I genuinly want to provide company to people that want company. I know what it is like to be lonely and feel like you just need someone to hangout with. I want to be there for people.</li>
          <li>Like everyone, I need money to live and this seems like a nice way to make money.</li>
          <li>I want to meet new people and this gives me a way to do that.</li>
          <li>I love listening to people when they need to be heard.</li>
          <li>I saw story about Japanese man that does this and it motivated me. Here is that video:</li>
        </ul>

        <iframe className="mt-4 max-w-full" width="560" height="315" src="https://www.youtube.com/embed/-ZbKzL6ikY8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />       
      
      </div>

      
    </div>
  )
}

RentAFriend.layoutProps = {
  Layout: DefaultLayout,
}

export default RentAFriend
