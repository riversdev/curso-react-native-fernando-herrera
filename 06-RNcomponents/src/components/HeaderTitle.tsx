import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { appTheme } from '../theme/appTheme'

interface Props {
    title: string
}

export const HeaderTitle = ({ title }: Props) => {
    const { top: marginTop } = useSafeAreaInsets()

    return (
        <View style={{ marginTop, marginBottom: 20 }}>
            <Text style={[appTheme.title, { color: '#5856D6' }]}>{title}</Text>
        </View>
    )
}