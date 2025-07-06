import React, { createContext, useContext } from 'react'

const ClerkContext = createContext({})

export const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
  // TODO: Implement Clerk authentication logic
  return <ClerkContext.Provider value={{}}>{children}</ClerkContext.Provider>
}

export const useClerk = () => useContext(ClerkContext)
