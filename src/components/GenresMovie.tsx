import { useLazyGetGenresMovieQuery } from '../store/movieApi';
import { useEffect } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export const GenresMovie = () => {
  const [getGenresMovie, { data: data, error, isFetching }] =
    useLazyGetGenresMovieQuery();

  useEffect(() => {
    getGenresMovie();
  }, []);

  return (
    <div>
      <List>
        {data?.genres.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
