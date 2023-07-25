import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MovieCard } from './MovieCard'
import { Movie } from '../interfaces'

interface Props {
    title?: string
    movies: Movie[]
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={[styles.container, { height: !!title ? 265 : 225 }]}>
            {
                title && (<Text style={styles.title}>{title}</Text>)
            }
            <FlatList
                data={movies}
                renderItem={({ item }) => (<MovieCard movie={item} height={200} width={140} />)}
                keyExtractor={(movie) => String(movie.id)}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <Text style={{ width: 10 }} />}
                style={styles.list}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 265,
        // backgroundColor: 'red',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
    },
    list: {
        paddingHorizontal: 10,
    },
})