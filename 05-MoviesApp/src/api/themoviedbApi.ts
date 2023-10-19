import axios from 'axios'

export const themoviedbApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '677be5ac111ce6c7c47e7a8309f1df85',
        language: 'es-ES',
    },
})