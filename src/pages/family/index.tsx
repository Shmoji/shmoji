import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"
import { useState } from "react"

export default function Family() {
  const [password, setPassword] = useState('')
  const [isFamily, setIsFamily] = useState(false)

  const passwordCheck = () => {
    if (password.toLowerCase() === 'test') {
      setIsFamily(true)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-bold mb-4">Page to immortalize the family of Shmoji</div>
      {isFamily ? (
        <div className="flex flex-col items-center space-y-6 text-blue-500">
          <span><A href="/nana">Nana</A></span>
          <span><A href="/papa">Papa</A></span>
          <span><A href="/dad">Dad</A></span>
        </div>
      ): (
        <div className="flex flex-col items-center space-y-6">
          <div>Enter password to see private family info</div>
          <input
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password..."
            className="rounded-lg block p-2 text-black"
          />
          <button
            onClick={passwordCheck}
            className="p-3 bg-blue-600 text-white rounded"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  )
}

Family.layoutProps = {
  Layout: DefaultLayout,
}
