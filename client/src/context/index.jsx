import { createContext, useContext } from 'react'

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    return (
        <StateContext.Provider value={{}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);