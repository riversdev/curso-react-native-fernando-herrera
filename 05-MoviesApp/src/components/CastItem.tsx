import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Cast } from '../interfaces'

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={styles.card}>
            <View style={styles.row}>
                {
                    actor.profile_path && (<Image source={{ uri }} style={styles.avatar} />)
                }
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{actor.name}</Text>
                    <Text style={styles.subtitle}>{actor.character}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // width: 300,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
        marginLeft: 20,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
    },
    avatar: {
        height: '100%',
        width: 55,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    infoContainer: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },
    subtitle: {
        fontSize: 16,
        color: 'black',
        opacity: 0.5,
    },
})