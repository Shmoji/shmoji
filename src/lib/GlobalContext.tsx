import React, { useState } from 'react'

interface GlobalContextState {
  isFunMode: boolean
  setIsFunMode: (val: boolean) => void
}

export const initialState: GlobalContextState = {
  isFunMode: false,
  setIsFunMode: (val: boolean) => {},
}

export const GlobalContext = React.createContext(initialState)

interface Props {}

export const GlobalContextComponent: React.FC<Props> = ({ children }: any) => {
  const [isFunMode, setIsFunMode] = useState(false)

  return (
    <GlobalContext.Provider
      value={{
        isFunMode,
        setIsFunMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
