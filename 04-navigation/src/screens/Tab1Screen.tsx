import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { appTheme, colors } from '../theme/appTheme'

export const Tab1Screen = () => {
    useEffect(() => {
        console.log('Tab 1 Screen effect')
    }, [])

    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Tab 1 Screen</Text>
            <Text>
                <Icon name="airplane-outline" size={80} color={colors.primary} />
                <Icon name="attach-outline" size={80} color={colors.primary} />
                <Icon name="bonfire-outline" size={80} color={colors.primary} />
                <Icon name="calculator-outline" size={80} color={colors.primary} />
                <Icon name="chatbubble-ellipses-outline" size={80} color={colors.primary} />
                <Icon name="images-outline" size={80} color={colors.primary} />
                <Icon name="leaf-outline" size={80} color={colors.primary} />
            </Text>
        </View>
    )
}