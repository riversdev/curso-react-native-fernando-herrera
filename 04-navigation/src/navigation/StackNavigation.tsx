import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Page1Screen, Page2Screen, Page3Screen, PersonScreen } from '../screens'

const Stack = createStackNavigator()

export const StackNavigation = () => {
    return (
        <Stack.Navigator
            // initialRouteName="Page2Screen"
            screenOptions={{
                // headerShown: false, // oculta el header :v
                headerStyle: {
                    elevation: 0, // sin border en android
                    shadowColor: 'transparent', // sin border en ios
                },
                cardStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Stack.Screen name="Page1Screen" component={Page1Screen} options={{ title: 'Página 1' }} />
            <Stack.Screen name="Page2Screen" component={Page2Screen} options={{ title: 'Página 2' }} />
            <Stack.Screen name="Page3Screen" component={Page3Screen} options={{ title: 'Página 3' }} />
            <Stack.Screen name="PersonScreen" component={PersonScreen} options={{ title: 'Persona' }} />
        </Stack.Navigator>
    )
}