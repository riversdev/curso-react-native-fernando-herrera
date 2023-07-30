import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useFade } from '../hooks'

export const FadeScreen = () => {
    const { opacity, fadeIn, fadeOut } = useFade()

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, { opacity }]} />
            <Button title="Fade In" onPress={() => fadeIn()} />
            <Button title="Fade Out" onPress={() => fadeOut()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: '#084F6A',
        borderWidth: 5,
        borderColor: 'white',
    },
})