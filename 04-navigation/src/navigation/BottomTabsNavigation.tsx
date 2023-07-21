import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Tab1Screen, Tab2Screen, Tab3Screen } from '../screens'
import { StackNavigation } from './StackNavigation'
import { TopTabsNavigation } from './TopTabsNavigation'
import { colors } from '../theme/appTheme'

const BottomTabIOS = createBottomTabNavigator()
const BottomTabANDROID = createMaterialBottomTabNavigator()

export const BottomTabsNavigation = () =>
    Platform.OS === 'ios'
        ? <BottomTabsNavigationIOS />
        : <BottomTabsNavigationANDROID />

const BottomTabsNavigationIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({ // screenOptions puede recibir una funcion o un objeto
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 18,
                },
                tabBarIcon: ({ color }) => {
                    switch (route.name) {
                        case 'Tab1Screen': return <Icon name="bandage-outline" size={20} color={color} />
                        case 'Tab2Screen': return <Icon name="american-football-outline" size={20} color={color} />
                        case 'TopTabsNavigation': return <Icon name="bookmarks-outline" size={20} color={color} />
                        case 'StackNavigation': return <Icon name="apps-outline" size={20} color={color} />
                    }
                },
            })}
        >
            {/* <Tab.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab 1', tabBarIcon: ({ color }) => <Text style={{ color }}>T1</Text> }} /> */}
            <BottomTabIOS.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab 1' }} />
            <BottomTabIOS.Screen name="Tab2Screen" component={Tab2Screen} options={{ title: 'Tab 2' }} />
            <BottomTabIOS.Screen name="TopTabsNavigation" component={TopTabsNavigation} options={{ title: 'Top Tabs' }} />
            <BottomTabIOS.Screen name="StackNavigation" component={StackNavigation} options={{ title: 'Stack' }} />
        </BottomTabIOS.Navigator>
    )
}

const BottomTabsNavigationANDROID = () => {
    return (
        <BottomTabANDROID.Navigator
            sceneAnimationEnabled
            barStyle={{
                backgroundColor: colors.primary,
            }}
            screenOptions={({ route }) => ({ // screenOptions puede recibir una funcion o un objeto
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 18,
                },
                tabBarIcon: ({ color }) => {
                    switch (route.name) {
                        case 'Tab1Screen': return <Icon name="bandage-outline" size={20} color={color} />
                        case 'Tab2Screen': return <Icon name="american-football-outline" size={20} color={color} />
                        case 'TopTabsNavigation': return <Icon name="bookmarks-outline" size={20} color={color} />
                        case 'StackNavigation': return <Icon name="apps-outline" size={20} color={color} />
                    }
                },
            })}
        >
            <BottomTabANDROID.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab 1' }} />
            <BottomTabANDROID.Screen name="Tab2Screen" component={Tab2Screen} options={{ title: 'Tab 2' }} />
            <BottomTabIOS.Screen name="TopTabsNavigation" component={TopTabsNavigation} options={{ title: 'Top Tabs' }} />
            <BottomTabANDROID.Screen name="StackNavigation" component={StackNavigation} options={{ title: 'Stack' }} />
        </BottomTabANDROID.Navigator>
    )
}