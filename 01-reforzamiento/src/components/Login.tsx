import { useEffect, useReducer } from 'react'

interface AuthState {
    isValidating: boolean
    token: null | string
    username: string
    name: string
}

const initialState: AuthState = {
    isValidating: false,
    token: null,
    username: '',
    name: ''
}

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: { token: string, username: string, name: string } }
    | { type: 'setValidating' }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'setValidating':
            return {
                ...state,
                isValidating: true
            }

        case 'login':
            return {
                isValidating: false,
                ...action.payload
            }

        case 'logout':
            return {
                isValidating: false,
                token: null,
                username: '',
                name: ''
            }

        default:
            return state
    }
}

export const Login = () => {
    const [{ isValidating, token, name }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setValidating()

        setTimeout(() => {
            logout()
        }, 1500)
    }, [])

    const setValidating = () => dispatch({ type: 'setValidating' })

    const login = () => {
        setValidating()

        setTimeout(() => {
            dispatch({ type: 'login', payload: { token: '123123', username: 'Rivers', name: 'Alejandro' } })
        }, 1500)
    }

    const logout = () => dispatch({ type: 'logout' })

    if (isValidating) return (
        <>
            <h3>Login</h3>
            <div className="alert alert-info">Validando...</div>
        </>
    )

    return (
        <>
            <h3>Login</h3>

            {
                (token)
                    ? (<div className="alert alert-success">Auntenticado como {name}</div>)
                    : (<div className="alert alert-danger">No autenticado</div>)
            }

            {
                (token)
                    ? (<button className="btn btn-danger" onClick={() => logout()}>Logout</button>)
                    : (<button className="btn btn-primary" onClick={() => login()}>Login</button>)
            }
        </>
    )
}