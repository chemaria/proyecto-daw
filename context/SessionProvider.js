import { createContext, useContext, useState } from 'react'

export const SessionContext = createContext(null)

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState('')
  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)
