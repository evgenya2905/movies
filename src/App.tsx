import { Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';

import {
  TitlesListTopRated,
  TitlesGenres,
  TitlesListByGenre,
  TitlesListFavorite,
  TitlesWatchlist,
  ItemDetail,
  NotFoundPage,
} from './Pages';

import { Header, Tabs } from './components';
import theme from './style/theme';

const App = () => {
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
        <Tabs />
      </Box>
      <Routes>
        <Route path="/" element={<TitlesListTopRated />} />
        <Route path="/genres" element={<TitlesGenres />} />
        <Route path="/favorite" element={<TitlesListFavorite />} />
        <Route path="/watchlist" element={<TitlesWatchlist />} />
        <Route path="/:category/:id/:title" element={<ItemDetail />} />
        <Route
          path="/genres/:category/:genre/:id"
          element={<TitlesListByGenre />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
