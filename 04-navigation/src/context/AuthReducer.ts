import { AuthState } from './AuthContext'

type authActions =
    | { type: 'signIn' }
    | { type: 'signOut' }
    | { type: 'changeFabicon', payload: { favoriteIcon: string } }
    | { type: 'changeUsername', payload: { username: string } }

export const AuthReducer = (state: AuthState, action: authActions): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet',
            }

        case 'signOut':
            return {
                isLoggedIn: false,
            }

        case 'changeFabicon':
            return {
                ...state,
                favoriteIcon: action.payload.favoriteIcon,
            }

        case 'changeUsername':
            return {
                ...state,
                username: action.payload.username,
            }
    }

    return state
}