import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { appTheme } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> {

}

export const Page1Screen = ({ navigation }: Props) => {
    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Página 1</Text>

            <Button
                title="Go to page 2"
                onPress={() => navigation.navigate('Page2Screen')}
            />
        </View>
    )
}