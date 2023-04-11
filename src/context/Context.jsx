import React, {createContext, useReducer} from 'react'

export const LoginContext = createContext({})

const handleLoginDispatch = (state, {type}) => {
    switch (type) {
        case "LOGIN":
                sessionStorage.setItem("token", JSON.stringify("ASDFVGMFD87878201"))
            return{
                ...state,
                isLogged: true
            }
        default:
            return state
    }
}

const LoginContextProvider = ({children}) => {
    
    const initialState = {
        isLogged: !!sessionStorage.getItem("token")
    }
    
    const [state, dispatch] = useReducer(handleLoginDispatch, initialState)

    const propiedades = {state, dispatch}

    return(
        <LoginContext.Provider value={propiedades}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider
