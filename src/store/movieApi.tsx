import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IResponse,
  ITitle,
  ITitleArguments,
  IResponseGenres,
  IResponseTitleByID,
  ITitleByGenre,
} from '../types/types';

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
    getTopTitles: builder.query<IResponse<ITitle[]>, ITitleArguments>({
      query: ({ category, page }) => ({
        url: `/${category}/top_rated?language=en-US&page=${page}`,
      }),
    }),
    getTitlesGenres: builder.query<IResponseGenres, ITitleArguments>({
      query: ({ category }) => ({
        url: `/genre/${category}/list?language=en`,
      }),
    }),
    getTitleById: builder.query<IResponseTitleByID, ITitleArguments>({
      query: ({ id, category }) => ({
        url: `/${category}/${id}?language=en-US`,
      }),
    }),
    getTitleByGenre: builder.query<IResponse<ITitleByGenre[]>, ITitleArguments>(
      {
        query: ({ id, category, page }) => ({
          url: `/discover/${category}?with_genres=${id}&page=${page}&sort_by=vote_average.desc`,
        }),
      }
    ),
    getFavoriteTitles: builder.query<IResponse<ITitle[]>, ITitleArguments>({
      query: ({ category, page }) => ({
        url: `/account/21547725/favorite/${category}?language=en-US&page=${page}`,
      }),
    }),

    addFavoriteTitle: builder.mutation<any, any>({
      query: (body) => ({
        url: '/account/21547725/favorite',
        method: 'POST',
        body,
      }),
    }),
    getWatchlistTitles: builder.query<IResponse<ITitle[]>, ITitleArguments>({
      query: ({ category, page }) => ({
        url: `/account/21547725/watchlist/${category}?language=en-US&page=${page}`,
      }),
    }),
    addWatchlistTitle: builder.mutation<any, any>({
      query: (body) => ({
        url: '/account/21547725/watchlist',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useLazyGetTopTitlesQuery,
  useLazyGetTitlesGenresQuery,
  useLazyGetTitleByIdQuery,
  useLazyGetTitleByGenreQuery,
  useLazyGetFavoriteTitlesQuery,
  useAddFavoriteTitleMutation,
  useLazyGetWatchlistTitlesQuery,
  useAddWatchlistTitleMutation,
} = movieApi;
