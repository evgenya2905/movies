import { Header, Lists } from './components';
import { Box, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import {
  TopMovies,
  TopTVShows,
  GenresMovie,
  GenresTVShow,
  FavoriteMovies,
  FavoriteTVShows,
  WatchlistMovies,
  WatchlistTVShows,
  NotFoundPage,
} from './components';
import { useSelector, UseSelector } from 'react-redux';
import { RootState } from './store/store';
import theme from './style/theme';

const App = () => {
  const flag = useSelector((state: RootState) => state.switch.value);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.default',
          padding: 0,
        }}
      >
        <Header />
        <Lists />
      </Box>
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
