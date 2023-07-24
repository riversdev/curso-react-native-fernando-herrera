import { useEffect, useState } from 'react'
import { themoviedbApi } from '../api/themoviedbApi'
import { Movie, TheMovieDbNowPlaying } from '../interfaces'

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState<Movie[]>([])

    const getMovies = async () => {
        const { data } = await themoviedbApi.get<TheMovieDbNowPlaying>('/now_playing')

        setMovies(data.results)
        setIsLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {
        isLoading,
        movies,
    }
}