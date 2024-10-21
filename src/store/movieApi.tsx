import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponse, IMovie, ITVShow } from '../types/types';

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
    getTopMovies: builder.query<IResponse<IMovie[]>, void>({
      query: () => ({
        url: '/movie/top_rated?language=en-US',
      }),
    }),
    getTopTV: builder.query<IResponse<ITVShow[]>, void>({
      query: () => '/tv/top_rated?language=en-US',
    }),
  }),
});

export const { useLazyGetTopMoviesQuery, useLazyGetTopTVQuery } = movieApi;
