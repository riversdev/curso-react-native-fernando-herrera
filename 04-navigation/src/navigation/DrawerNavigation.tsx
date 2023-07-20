import React from 'react'
import { Image, Text, View, useWindowDimensions } from 'react-native'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer'
import { StackNavigation } from './StackNavigation'
import { SettingsScreen } from '../screens'
import { appTheme } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
            <Drawer.Screen name="StackNavigation" component={StackNavigation} />
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
                    onPress={() => navigation.navigate('StackNavigation')}
                >
                    <Text style={appTheme.menuTextItem}>Stack navigation</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={appTheme.menuTextItem}>Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}