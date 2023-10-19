import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import { appTheme, colors } from '../theme/appTheme'
import { RootStackParams } from '../navigation'

// interface Props extends StackScreenProps<RootStackParams, 'Page1Screen'> { }
interface Props extends DrawerScreenProps<any, any> { }

export const Page1Screen = ({ navigation }: Props) => {
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}
                    style={{ marginLeft: 20 }}
                >
                    <Icon name="menu-outline" size={30} color={colors.primary} />
                </TouchableOpacity>
            )
        })
    }, [])

    return (
        <View style={appTheme.container}>
            <Text style={appTheme.title}>Página 1</Text>

            <Button
                title="Go to page 2"
                onPress={() => navigation.navigate('Page2Screen')}
            />

            <Text style={{ marginTop: 30, ...appTheme.title }}>Navigate with arguments</Text>
            <View style={{ flexDirection: 'row', marginTop: 10, gap: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonScreen', { id: 1, name: 'Chanchito feliz' })}
                    style={[appTheme.button, { backgroundColor: '#5856D6' }]}
                >
                    <Icon name="man-outline" size={30} color={'white'} />
                    <Text style={appTheme.textWhite}>Chanchito feliz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonScreen', { id: 2, name: 'Chanchito triste' })}
                    style={[appTheme.button, { backgroundColor: '#FF9427' }]}
                >
                    <Icon name="woman-outline" size={30} color={'white'} />
                    <Text style={appTheme.textWhite}>Chanchito triste</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}