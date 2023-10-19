import { useEffect, useState } from 'react'
import { themoviedbApi } from '../api/themoviedbApi'
import { Movie, TheMovieDbResponse } from '../interfaces'

interface UseMoviesProps {
    isLoading: boolean
    movies: MovieCategories
}

interface MovieCategories {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upcoming: Movie[]
}

export const useMovies = (): UseMoviesProps => {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState<MovieCategories>({ nowPlaying: [], popular: [], topRated: [], upcoming: [] })

    const getMovies = async () => {
        const [nowPlaying, popular, topRated, upcoming] =
            await Promise.all([
                themoviedbApi.get<TheMovieDbResponse>('/now_playing'),
                themoviedbApi.get<TheMovieDbResponse>('/popular'),
                themoviedbApi.get<TheMovieDbResponse>('/top_rated'),
                themoviedbApi.get<TheMovieDbResponse>('/upcoming'),
            ])

        setMovies({
            nowPlaying: nowPlaying.data.results,
            popular: popular.data.results,
            topRated: topRated.data.results,
            upcoming: upcoming.data.results,
        })

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