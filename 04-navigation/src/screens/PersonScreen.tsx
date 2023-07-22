import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthContext } from '../context/AuthContext'
import { RootStackParams } from '../navigation'
import { appTheme } from '../theme/appTheme'

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> { }

export const PersonScreen = ({ navigation, route }: Props) => {
    const { params } = route
    const { changeUsername } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])

    useEffect(() => {
        changeUsername(params.name)
    }, [])

    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>
                {JSON.stringify(params, null, 2)}
            </Text>
        </View>
    )
}