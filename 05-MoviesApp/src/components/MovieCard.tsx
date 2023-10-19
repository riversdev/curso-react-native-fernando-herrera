import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../navigation/Navigation'
import { Movie } from '../interfaces'

interface Props {
    movie: Movie
    height?: number
    width?: number
}

export const MovieCard = ({ movie, height = 420, width = 300 }: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <TouchableOpacity
            style={[styles.container, { height, width }]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DetailScreen', { movie })}
        >
            <View style={styles.posterShadow}>
                <Image source={{ uri }} style={styles.poster} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 420,
        width: 300,
    },
    posterShadow: {
        flex: 1,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 7,
    },
    poster: {
        flex: 1,
        borderRadius: 15,
    },
})