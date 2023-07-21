import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { appTheme } from '../theme/appTheme'

export const Tab2Screen = () => {
    useEffect(() => {
        console.log('Tab 2 Screen effect')
    }, [])

    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Tab 2 Screen</Text>
        </View>
    )
}