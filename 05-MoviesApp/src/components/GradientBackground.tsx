import React, { useContext, useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext'
import { useFade } from '../hooks'

interface Props {
    children: JSX.Element | JSX.Element[],
}

export const GradientBackground = ({ children }: Props) => {
    const { colors, prevColors, setPrevColors } = useContext(GradientContext)
    const { opacity, fadeIn, fadeOut } = useFade()

    useEffect(() => {
        fadeIn()

        setTimeout(() => {
            setPrevColors(colors)
            fadeOut(0)
        }, 1000);
    }, [colors])

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.8 }}
            />
            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity }}
            >
                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.8 }}
                />
            </Animated.View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})