import { useEffect, useState } from "react"
import { useCeramicStore } from "stores/ceramicStore"
import shallow from 'zustand/shallow'

const useDID = () => {
  const [isDIDActive, setIsDIDActive] = useState(false)
  const ceramic = useCeramicStore((state: any) => state.ceramic, shallow)

  useEffect(() => {
    const isConnectedOnLoad = localStorage.getItem('IS_DID_CONNECTED') === 'true'
    setIsDIDActive(ceramic && ceramic.did ? ceramic.did.authenticated : isConnectedOnLoad)
  }, [ceramic])

  return isDIDActive
}

export default useDID
