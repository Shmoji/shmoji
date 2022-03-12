import create from 'zustand'

type State = {
  ceramic: any
}

export const useCeramicStore = create<State>((set) => ({
  ceramic: null,
  setCeramic: (newData: any) => {
    set({ ceramic: newData })
  },
  clearCurrentData: () => {
    console.log('clearing ceramic')
    set({ ceramic: null })
  }
}))
