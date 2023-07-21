import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { appTheme } from '../theme/appTheme'

export const Tab3Screen = () => {
    useEffect(() => {
        console.log('Tab 3 Screen effect')
    }, [])

    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Tab 3 Screen</Text>
        </View>
    )
}