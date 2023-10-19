import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { MovieCard } from './MovieCard'
import { Movie } from '../interfaces'

interface Props {
    movies: Movie[]
    getPosterColors: (index: number) => Promise<void>
}

export const MoviesCarousel = ({ movies, getPosterColors }: Props) => {
    const { width: windowWidth } = useWindowDimensions()

    return (
        <View style={styles.carouselContainer} >
            <Carousel
                data={movies}
                renderItem={({ item }: any) => (<MovieCard movie={item} />)}
                sliderWidth={windowWidth}
                itemWidth={300}
                inactiveSlideOpacity={0.9}
                onSnapToItem={getPosterColors}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    carouselContainer: {
        height: 440,
    },
})