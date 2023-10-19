import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { TouchableIcon } from '../components'
import { appTheme } from '../theme/appTheme'

export const Tab1Screen = () => {
    useEffect(() => {
        console.log('Tab 1 Screen effect')
    }, [])

    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Tab 1 Screen</Text>
            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="attach-outline" />
                <TouchableIcon iconName="bonfire-outline" />
                <TouchableIcon iconName="calculator-outline" />
                <TouchableIcon iconName="chatbubble-ellipses-outline" />
                <TouchableIcon iconName="images-outline" />
                <TouchableIcon iconName="leaf-outline" />
            </Text>
        </View>
    )
}