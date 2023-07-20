import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { appTheme } from '../theme/appTheme'

export const Page2Screen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: 'Nuevo titulo 2',
            headerBackTitle: 'Regresar', // visible en ios
        })
    }, [])

    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Página 2</Text>

            <Button
                title="Go to page 3"
                onPress={() => navigation.navigate('Page3Screen' as never)}
            />
        </View>
    )
}