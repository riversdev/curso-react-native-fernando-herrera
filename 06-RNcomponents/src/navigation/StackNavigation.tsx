import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AlertScreen, Animation101Screen, Animation102Screen, HomeScreen, PullToRefreshScreen, SwitchScreen, TextInputScreen } from '../screens'

export type RootStackParams = {
    HomeScreen: undefined,
    Animation101Screen: undefined,
    Animation102Screen: undefined,
    SwitchScreen: undefined,
    AlertScreen: undefined,
    TextInputScreen: undefined,
    PullToRefreshScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>()

export const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
            <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
            <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
            <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
            <Stack.Screen name="AlertScreen" component={AlertScreen} />
            <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
        </Stack.Navigator>
    )
}