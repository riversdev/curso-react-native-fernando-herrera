import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { GradientContext } from '../context/GradientContext'
import { MoviesCarousel, HorizontalSlider, GradientBackground } from '../components'
import { useMovies } from '../hooks'
import { getImageColors } from '../helpers'

export const HomeScreen = () => {
    const { isLoading, movies } = useMovies()
    const insets = useSafeAreaInsets()
    const { colors, setColors, setPrevColors } = useContext(GradientContext)

    const getPosterColors = async (index: number) => {
        const movie = movies.nowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

        const newColors = await getImageColors(uri)

        // setPrevColors(colors)
        setColors(newColors)
    }

    useEffect(() => {
        if (movies.nowPlaying.length > 0) {
            getPosterColors(0)
        }
    }, [movies])

    if (isLoading) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <ActivityIndicator color="red" size={100} />
        </View>
    )

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: insets.top + 20 }}>
                    <MoviesCarousel movies={movies.nowPlaying} getPosterColors={getPosterColors} />
                    <HorizontalSlider title="Popular" movies={movies.popular} />
                    <HorizontalSlider title="Top rated" movies={movies.topRated} />
                    <HorizontalSlider title="Upcoming" movies={movies.upcoming} />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}