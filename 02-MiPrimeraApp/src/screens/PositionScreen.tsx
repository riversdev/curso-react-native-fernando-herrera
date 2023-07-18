import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.greenBox} /> */}
            <View style={styles.purpleBox} />
            <View style={styles.orangeBox} />
        </View>
    )
}

const styles = StyleSheet.create({
    // RELATIVA
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#28C4D9'
    // },
    // purpleBox: {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: '#5856D6',
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     bottom: 10,
    //     right: -60,
    // },
    // orangeBox: {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: '#F0A23B',
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     top: 10,
    //     left: -60,
    // },

    // ABSOLUTA
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#28C4D9',
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    greenBox: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',

        // position: 'absolute',
        // top: 0,
        // right: 0,
        // bottom: 0,
        // left: 0,
        ...StyleSheet.absoluteFillObject, // sin ancho, alto, position, top, right, bottom y left definidos esto hace abarcar toda la pantalla
    },
})