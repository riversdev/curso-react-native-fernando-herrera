import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { RootStackParams } from '../navigation/StackNavigation'
import { MenuItem } from '../interfaces'

interface Props {
    item: MenuItem
}

export const FlatListMenuItem = ({ item }: Props) => {
    const { name, icon, component } = item
    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(component)}
        >
            <View style={styles.container}>
                <Icon
                    name={icon}
                    color="#5856D6"
                    size={25}
                />
                <Text style={styles.itemText}>{name}</Text>
                <View style={styles.spacer} />
                <Icon
                    name="chevron-forward-outline"
                    color="#5856D6"
                    size={25}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 20,
    },
    spacer: { // hack
        flex: 1,
    },
})