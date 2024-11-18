import { Box, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
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
import { useSelector } from 'react-redux';
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
        {/* <Route path="/search/:key" element={<TitlesBySearch />}></Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
