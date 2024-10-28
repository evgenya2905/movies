import { Box, Tab, Tabs } from '@mui/material';
import { useState, useEffect } from 'react';
import {
  TopMovies,
  TopTVShows,
  GenresMovie,
  GenresTVShow,
  FavoriteMovies,
  FavoriteTVShows,
  SwitchButton,
  WatchlistMovies,
  WatchlistTVShows,
} from './';
import { Route, Routes, Link, useLocation } from 'react-router-dom';

export const Lists = () => {
  const location = useLocation();
  const [value, setValue] = useState('Top');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setValue('Top');
        break;
      case '/genres':
        setValue('Genres');
        break;
      case '/favorite':
        setValue('Favorite');
        break;
      case '/watchlist':
        setValue('Watchlist');
        break;
      default:
        setValue('Top');
    }
  }, [location.pathname]);

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
          <Tab component={Link} to="/" label="Top" value="Top" />
          <Tab component={Link} to="/genres" label="Genres" value="Genres" />
          <Tab
            component={Link}
            to="/favorite"
            label="Favorite"
            value="Favorite"
          />
          <Tab
            component={Link}
            to="/watchlist"
            label="Watchlist"
            value="Watchlist"
          />
        </Tabs>
      </Box>

      <SwitchButton flag={flag} onChange={handleFlag} />

      <Routes>
        <Route
          path="/"
          element={flag === 'movies' ? <TopMovies /> : <TopTVShows />}
        />
        <Route
          path="/genres"
          element={flag === 'movies' ? <GenresMovie /> : <GenresTVShow />}
        />
        <Route
          path="/favorite"
          element={flag === 'movies' ? <FavoriteMovies /> : <FavoriteTVShows />}
        />
        <Route
          path="/watchlist"
          element={
            flag === 'movies' ? <WatchlistMovies /> : <WatchlistTVShows />
          }
        />
      </Routes>

      {/*  {value === 'Top' && (flag === 'movies' ? <TopMovies /> : <TopTVShows />)} */}
      {/*  {value === 'Genres' &&
        (flag === 'movies' ? <GenresMovie /> : <GenresTVShow />)} */}
    </div>
  );
};
