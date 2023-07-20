import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { appTheme } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation'

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> { }

export const PersonScreen = ({ navigation, route }: Props) => {
    const { params } = route

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])

    console.log(JSON.stringify(params, null, 2))

    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>
                {JSON.stringify(params, null, 2)}
            </Text>
        </View>
    )
}