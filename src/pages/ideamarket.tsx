import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"

const Ideamarket = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-8">Ideamarket</div>

      <A href="https://ideamarket.io/" className="text-blue-600 mb-8">Click here for website</A>

      <div className="mb-8 mx-4">A Post-to-Earn knowledge graph for building credibility without institutions.</div>
      <div className="mb-8 mx-4 italic">I am a fullstack developer for this project. Built everything you see on the frontend, much of the backend, and some of the contracts.</div>
      
      <div className="mb-4">
        <div className="font-bold">Frontend Tech Stack</div>
        
        <ul className="ml-5 list-disc">
          <li>NextJS/React</li>
          <li>TailwindCSS</li>
          <li>web3 and web3-react libraries</li>
        </ul>
      </div>
      
      <div className="mb-4">
        <div className="font-bold">Backend Tech Stack</div>
        
        <ul className="ml-5 list-disc">
          <li>NodeJS/Express</li>
          <li>MongoDB</li>
          <li>Microsoft Azure app services and webjobs</li>
        </ul>
      </div>
      
      <div className="mb-4">
        <div>Subgraph: <A href="https://github.com/Ideamarket/subgraph" className="text-blue-600">https://github.com/Ideamarket/subgraph</A></div>
        <div>Contracts found in ideamarket-contracts and blockchain-of-opinions repos: <A href="https://github.com/Ideamarket" className="text-blue-600">https://github.com/Ideamarket</A></div>
      </div>

    </div>
  )
}

Ideamarket.layoutProps = {
  Layout: DefaultLayout,
}

export default Ideamarket
