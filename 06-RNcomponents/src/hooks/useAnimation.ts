import { useRef } from 'react'
import { Animated, Easing } from 'react-native'

export const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current
    const position = useRef(new Animated.Value(0)).current

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start(() => console.log('Fin fadeIn'))
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start(() => console.log('Fin fadeOut'))
    }

    const startMovingPosition = (initPosition: number, duration: number = 300) => {
        position.setValue(initPosition)

        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                // easing: Easing.bounce, // que salte
            }
        ).start()
    }

    return {
        opacity,
        position,

        fadeIn,
        fadeOut,
        startMovingPosition,
    }
}