import React from 'react'
import { Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { AlbumsScreen, ChatScreen, ContactsScreen } from '../screens'
import { colors } from '../theme/appTheme'

const Tab = createMaterialTopTabNavigator()

export const TopTabsNavigation = () => {
    const insets = useSafeAreaInsets()

    return (
        <Tab.Navigator
            style={{ marginTop: insets.top }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({ // screenOptions puede recibir una funcion o un objeto
                tabBarPressColor: colors.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary,
                },
                tabBarStyle: {
                    elevation: 0,
                    shadowColor: 'transparent', // ios
                },
                tabBarIcon: ({ color }) => {
                    switch (route.name) {
                        case 'ChatScreen': return <Icon name="chatbox-ellipses-outline" size={20} color={color} />
                        case 'ContactsScreen': return <Icon name="people-outline" size={20} color={color} />
                        case 'AlbumsScreen': return <Icon name="albums-outline" size={20} color={color} />
                    }
                },
            })}
        >
            <Tab.Screen name="ChatScreen" component={ChatScreen} options={{ title: 'Chat' }} />
            <Tab.Screen name="ContactsScreen" component={ContactsScreen} options={{ title: 'Contacts' }} />
            <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} options={{ title: 'Albums' }} />
        </Tab.Navigator>
    )
}