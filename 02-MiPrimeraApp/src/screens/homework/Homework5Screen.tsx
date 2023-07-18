import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Homework5Screen = () => {
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
        flexDirection: 'row', //
        justifyContent: 'space-between', //
    },
    purpleBox: {
        width: 100,
        // height: 100, //
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        alignSelf: 'stretch', // funciona sin este ya que stretch es por defecto
    },
    orangeBox: {
        width: 100,
        // height: 100, //
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        alignSelf: 'stretch', // funciona sin este ya que stretch es por defecto
    },
    blueBox: {
        width: 100,
        // height: 100, //
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        alignSelf: 'stretch', // funciona sin este ya que stretch es por defecto
    },
})