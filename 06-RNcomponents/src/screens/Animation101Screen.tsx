import React from 'react'
import { View, StyleSheet, Animated, Button } from 'react-native'
import { useAnimation } from '../hooks'

export const Animation101Screen = () => {
    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation()

    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.purpleBox,
                {
                    opacity,
                    transform: [{
                        // translateY: position,
                        translateX: position,
                    }]
                }
            ]} />
            <Button title="Fade In" onPress={() => {
                fadeIn()
                startMovingPosition(-100)
            }} />
            <Button title="Fade Out" onPress={fadeOut} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    },
})