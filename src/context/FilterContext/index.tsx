import { createContext, useState } from 'react'

export interface FilterContextInterface {
  filter: boolean
  setFilter: (value: boolean) => void
}

interface FilterProviderProps {
  children: React.ReactNode
}

export const FilterContext = createContext<null | FilterContextInterface>(null)

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filter, setFilter] = useState<boolean>(false)

  return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>
}
