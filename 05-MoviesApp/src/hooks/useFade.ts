import { useRef } from 'react'
import { Animated } from 'react-native'

export const useFade = () => {
    const opacity = useRef(new Animated.Value(0)).current

    const fadeIn = () => {
        Animated.timing(
            opacity,
            { toValue: 1, duration: 800, useNativeDriver: true }
        ).start()
    }

    const fadeOut = (duration: number = 800) => {
        Animated.timing(
            opacity,
            { toValue: 0, duration, useNativeDriver: true }
        ).start()
    }

    return {
        opacity,

        fadeIn,
        fadeOut,
    }
}