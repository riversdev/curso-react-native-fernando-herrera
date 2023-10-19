import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import prompt from 'react-native-prompt-android'
import { HeaderTitle } from '../components'
import { appTheme } from '../theme/appTheme'

export const AlertScreen = () => {
    const showAlert = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
            { text: 'Otro boton', onPress: () => console.log('Otro boton Pressed') },
        ], {
            cancelable: true,
            onDismiss: () => console.log('on dismiss')
        })
    }

    // only ios
    // const showPromt = () => {
    //     Alert.prompt(
    //         'Esta seguro ?',
    //         'Esta accion no se puede revertir',
    //         (valor: string) => console.log('info: ', valor),
    //         'plain-text',
    //         'Hola mundo',
    //     )
    // }

    const showPromt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        )
    }

    return (
        <View style={appTheme.container}>
            <HeaderTitle title="Alert" />
            <Button
                title="Show alert"
                onPress={showAlert}
            />
            <Button
                title="Show prompt"
                onPress={showPromt}
            />
        </View>
    )
}