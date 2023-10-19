import React from 'react'
import { Image, Text, View, useWindowDimensions } from 'react-native'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { BottomTabsNavigation } from './BottomTabsNavigation'
import { SettingsScreen } from '../screens'
import { appTheme } from '../theme/appTheme'

const Drawer = createDrawerNavigator()

export const DrawerNavigation = () => {
    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false, // muestra o oculta el header del drawer navigation
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}
            drawerContent={DrawerContent}
        >
            <Drawer.Screen name="BottomTabsNavigation" component={BottomTabsNavigation} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* Avatar */}
            <View style={appTheme.avatarContainer}>
                <Image
                    source={{ uri: 'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png' }}
                    style={appTheme.avatar}
                />
            </View>
            {/* Menu options */}
            <View style={appTheme.menuContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('BottomTabsNavigation')}
                    style={appTheme.menuItem}
                >
                    <Icon name="compass-outline" size={30} color={'black'} />
                    <Text style={appTheme.menuTextItem}>Bottom tabs navigation</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SettingsScreen')}
                    style={appTheme.menuItem}
                >
                    <Icon name="settings-outline" size={30} color={'black'} />
                    <Text style={appTheme.menuTextItem}>Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}