import { useLazyGetGenresTVShowQuery } from '../store/movieApi';
import { useEffect } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export const GenresTVShow = () => {
  const [getGenresTVShow, { data: data, error, isFetching }] =
    useLazyGetGenresTVShowQuery();

  useEffect(() => {
    getGenresTVShow();
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
