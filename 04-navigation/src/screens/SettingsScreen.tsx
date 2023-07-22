import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'
import { appTheme, colors } from '../theme/appTheme'

export const SettingsScreen = () => {
    const insets = useSafeAreaInsets() // tiene los valores de cada lado de la pantalla que ocupan un notch
    const { authState } = useContext(AuthContext)

    // console.log({ authState })

    return (
        <View style={{ ...appTheme.container, marginTop: insets.top }}>
            <Text style={appTheme.title}>Settings Screen</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>
            {
                authState.favoriteIcon && (<Icon name={authState.favoriteIcon} size={150} color={colors.primary} />)
            }
        </View>
    )
}