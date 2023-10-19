import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Homework6Screen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purpleBox} />
            <View style={styles.orangeBox} />
            <View style={styles.blueBox} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
    },
    purpleBox: {
        // width: 100, //
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        flex: 1, //
        alignSelf: 'stretch', // funciona sin este porque por defecto es stretch
    },
    orangeBox: {
        // width: 100, //
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        flex: 1, //
        alignSelf: 'stretch', // funciona sin este porque por defecto es stretch
    },
    blueBox: {
        // width: 100, //
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        flex: 2, //
        alignSelf: 'stretch', // funciona sin este porque por defecto es stretch
    },
})