import React from 'react'
import { View, Text } from 'react-native'
import { appTheme } from '../theme/appTheme'

export const ContactsScreen = () => {
    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Contacts Screen</Text>
        </View>
    )
}