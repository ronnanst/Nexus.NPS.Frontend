'use client'
import { createContext, ReactNode, useContext, useState } from "react"

const UserContext = createContext<any>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userId, setUserId] = useState<string | null>(null)

    return (
        <UserContext.Provider value={{
            userId,
            setUserId,
        }}>
            { children }
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    
    if(!context) {
        throw new Error('useUser must be used with its provider')
    }
    return context
}