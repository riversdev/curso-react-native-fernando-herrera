import React from 'react'
import { View, Text } from 'react-native'
import { appTheme } from '../theme/appTheme'

export const AlbumsScreen = () => {
    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Albums Screen</Text>
        </View>
    )
}