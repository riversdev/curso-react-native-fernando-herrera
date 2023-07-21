import React from 'react'
import { View, Text } from 'react-native'
import { appTheme } from '../theme/appTheme'

export const ChatScreen = () => {
    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Chat Screen</Text>
        </View>
    )
}