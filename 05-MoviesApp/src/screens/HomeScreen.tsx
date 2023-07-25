import React from 'react'
import { View, ActivityIndicator, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MoviesCarousel, HorizontalSlider } from '../components'
import { useMovies } from '../hooks'

export const HomeScreen = () => {
    const { isLoading, movies } = useMovies()
    const insets = useSafeAreaInsets()


    if (isLoading) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <ActivityIndicator color="red" size={100} />
        </View>
    )

    return (
        <ScrollView>
            <View style={{ marginTop: insets.top + 20 }}>
                <MoviesCarousel movies={movies.nowPlaying} />
                <HorizontalSlider title="Popular" movies={movies.popular} />
                <HorizontalSlider title="Top rated" movies={movies.topRated} />
                <HorizontalSlider title="Upcoming" movies={movies.upcoming} />
            </View>
        </ScrollView>
    )
}