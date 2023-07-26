import { useEffect, useState } from 'react'
import { themoviedbApi } from '../api/themoviedbApi'
import { Credits, FullMovie } from '../interfaces'

interface UseMovieDetailsProps {
    isLoading: boolean
    details: MovieDetails
}

interface MovieDetails {
    fullMovie?: FullMovie
    credits?: Credits
}

export const useMovieDetails = (movieId: number): UseMovieDetailsProps => {
    const [isLoading, setIsLoading] = useState(true)
    const [details, setDetails] = useState<MovieDetails>({})

    const getDetails = async () => {
        const [fullMovie, credits] = await Promise.all([
            themoviedbApi.get<FullMovie>(`/${movieId}`),
            themoviedbApi.get<Credits>(`/${movieId}/credits`),
        ])

        setDetails({
            fullMovie: fullMovie.data,
            credits: credits.data,
        })

        setIsLoading(false)
    }

    useEffect(() => {
        getDetails()
    }, [])

    return {
        isLoading,
        details
    }
}