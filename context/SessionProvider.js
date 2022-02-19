import { createContext, useContext, useState } from 'react'
export const SessionContext = createContext(null)

export const SessionProvider = ({ children }) => {
  const [token, setToken] = useState('adadadsad')

  return (
    <SessionContext.Provider value={{ token, setToken }}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => useContext(SessionContext)
