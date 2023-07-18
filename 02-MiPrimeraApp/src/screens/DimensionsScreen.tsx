import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

// const { width, height } = Dimensions.get('window')

export const DimensionsScreen = () => {
    const { width, height } = useWindowDimensions()

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.35
                }} />
                <View style={styles.orangeBox} />
            </View>
            <Text style={styles.title}>W: {Math.round(width)}, H: {Math.round(height)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 200,
        backgroundColor: 'red',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%',
    },
    orangeBox: {
        backgroundColor: '#F0A23B'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
})