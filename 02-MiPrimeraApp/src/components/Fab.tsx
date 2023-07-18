import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native'

interface Props {
    title: string
    position?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    onPress: () => void
}

export const Fab = ({ title, position = 'bottom-right', onPress }: Props) => {
    const ios = () => (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.fabContainer, styles[position]]}
            activeOpacity={0.8}
        >
            <View style={[styles.fab, styles.shadow]}>
                <Text style={styles.fabText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )

    const android = () => (
        <View style={[styles.fabContainer, styles[position]]}>
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
            >
                <View style={[styles.fab, styles.shadow]}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )

    return Platform.OS === 'ios' ? ios() : android()
}

const styles = StyleSheet.create({
    fabContainer: {
        position: 'absolute',
    },
    top: { top: 25, },
    bottom: { bottom: 25 },
    left: { left: 25 },
    right: { right: 25 },
    'top-left': { top: 25, left: 25 },
    'top-right': { top: 25, right: 25 },
    'bottom-left': { bottom: 25, left: 25 },
    'bottom-right': { bottom: 25, right: 25 },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
})