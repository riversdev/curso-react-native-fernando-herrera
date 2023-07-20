import React from 'react'
import { useWindowDimensions } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StackNavigation } from './StackNavigation'
import { SettingsScreen } from '../screens'

const Drawer = createDrawerNavigator()

export const BasicDrawerNavigation = () => {
    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false, // muestra o oculta el header del drawer navigation
                // drawerPosition: 'right', // drawer a la derecha :v
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}
        >
            <Drawer.Screen name="StackNavigation" options={{ title: 'Stack navigation' }} component={StackNavigation} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    )
}