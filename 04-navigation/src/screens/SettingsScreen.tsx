import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { appTheme } from '../theme/appTheme'

export const SettingsScreen = () => {
    const insets = useSafeAreaInsets() // tiene los valores de cada lado de la pantalla que ocupan un notch

    return (
        <View style={{ ...appTheme.container, marginTop: insets.top }}>
            <Text style={appTheme.title}>Settings Screen</Text>
        </View>
    )
}