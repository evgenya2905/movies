import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import {
  TopMovies,
  TopTVShows,
  GenresMovie,
  GenresTVShow,
  SwitchButton,
} from './';

export const Lists = () => {
  const [value, setValue] = useState('Top');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [flag, setFlag] = useState<string | null>('movies');
  const handleFlag = (
    event: React.MouseEvent<HTMLElement>,
    newFlag: string | null
  ) => {
    setFlag(newFlag);
  };

  return (
    <div>
      <Box sx={{ margin: '0' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable types of tabs"
          sx={{ justifyContent: 'center' }}
        >
          <Tab label="Top" value="Top" />
          <Tab label="Genres" value="Genres" />
          <Tab label="Favorite" value="Favorite" />
          <Tab label="Watchlist" value="Watchlist" />
        </Tabs>
      </Box>

      <SwitchButton flag={flag} onChange={handleFlag} />

      {value === 'Top' && (flag === 'movies' ? <TopMovies /> : <TopTVShows />)}
      {value === 'Genres' &&
        (flag === 'movies' ? <GenresMovie /> : <GenresTVShow />)}
    </div>
  );
};
