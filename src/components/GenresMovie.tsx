import { useLazyGetGenresMovieQuery } from '../store/movieApi';
import { useEffect } from 'react';
import { GenreCard } from './';
import { Box } from '@mui/material';

export const GenresMovie = () => {
  const [getGenresMovie, { data, error, isFetching }] =
    useLazyGetGenresMovieQuery();

  useEffect(() => {
    getGenresMovie();
  }, []);

  return (
    <Box
      sx={{
        margin: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}
    >
      {data?.genres.map((item) => <GenreCard key={item.id} name={item.name} />)}
    </Box>
  );
};
