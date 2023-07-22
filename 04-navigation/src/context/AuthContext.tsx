import React, { createContext, useReducer } from 'react'
import { AuthReducer } from './AuthReducer'

export interface AuthState {
    isLoggedIn: boolean
    username?: string
    favoriteIcon?: string
}

const initialState: AuthState = {
    isLoggedIn: false,
}

export interface AuthContextProps {
    authState: AuthState
    signIn: () => void,
    signOut: () => void,
    changeFavoriteIcon: (favoriteIcon: string) => void,
    changeUsername: (username: string) => void,
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => { // tambien se podria definir el children de tipo JSX.Element, JSX.Element[]
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const signIn = () => dispatch({ type: 'signIn' })
    const signOut = () => dispatch({ type: 'signOut' })
    const changeFavoriteIcon = (favoriteIcon: string) => dispatch({ type: 'changeFabicon', payload: { favoriteIcon } })
    const changeUsername = (username: string) => dispatch({ type: 'changeUsername', payload: { username } })

    return (
        <AuthContext.Provider
            value={{
                authState: state,
                signIn,
                signOut,
                changeFavoriteIcon,
                changeUsername,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}