import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponse, IMovie, ITVShow, IResponseGenres } from '../types/types';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_API_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopMovies: builder.query<IResponse<IMovie[]>, number>({
      query: (page) => ({
        url: `/movie/top_rated?language=en-US&page=${page}`,
      }),
    }),
    getTopTV: builder.query<IResponse<ITVShow[]>, number>({
      query: (page) => ({
        url: `/tv/top_rated?language=en-US&page=${page}`,
      }),
    }),
    getGenresMovie: builder.query<IResponseGenres, void>({
      query: () => ({
        url: `/genre/movie/list?language=en`,
      }),
    }),
    getGenresTVShow: builder.query<IResponseGenres, void>({
      query: () => ({
        url: `/genre/tv/list?language=en`,
      }),
    }),
  }),
});

export const {
  useLazyGetTopMoviesQuery,
  useLazyGetTopTVQuery,
  useLazyGetGenresMovieQuery,
  useLazyGetGenresTVShowQuery,
} = movieApi;
