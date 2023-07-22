import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { appTheme } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

export const ContactsScreen = () => {
    const { authState, signIn } = useContext(AuthContext)

    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Contacts Screen</Text>

            {
                !authState.isLoggedIn && (<Button title="Sign In" onPress={() => signIn()} />)
            }
        </View>
    )
}