import { useLazyGetGenresTVShowQuery } from '../store/movieApi';
import { useEffect } from 'react';
import { GenreCard } from './';
import { Box } from '@mui/material';

export const GenresTVShow = () => {
  const [getGenresTVShow, { data: data, error, isFetching }] =
    useLazyGetGenresTVShowQuery();

  useEffect(() => {
    getGenresTVShow();
  }, []);

  return (
    <Box
      sx={{
        margin: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        gap: '1.5rem',
        flexWrap: 'wrap',
      }}
    >
      {data?.genres.map((item) => <GenreCard key={item.id} name={item.name} />)}
    </Box>
  );
};
