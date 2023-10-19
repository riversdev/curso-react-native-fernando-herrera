import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { appTheme } from '../theme/appTheme'

export const AlbumsScreen = () => {
    const { authState, signOut } = useContext(AuthContext)

    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Albums Screen</Text>
            {
                authState.isLoggedIn && (<Button title="Sign out" onPress={() => signOut()} />)
            }
        </View>
    )
}