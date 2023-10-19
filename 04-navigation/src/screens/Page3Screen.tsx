import React from 'react'
import { View, Text, Button } from 'react-native'
import { appTheme } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation'

interface Props extends StackScreenProps<RootStackParams, 'Page3Screen'> { }

export const Page3Screen = ({ navigation }: Props) => {
    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Página 3</Text>

            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go to top"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}