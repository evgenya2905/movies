
import { useState } from 'react';
import { TopMovies } from './components/TopMovies';
import { TopTV } from './components/TopTV';
import { Header } from './components/Header';
import {
  Box,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import theme from './style/theme';

const App = () => {
  const [flag, setFlag] = useState<string | null>('movies');
  const handleFlag = (
    event: React.MouseEvent<HTMLElement>,
    newFlag: string | null
  ) => {
    setFlag(newFlag);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          backgroundColor: 'background.default',
          padding: 0,
        }}
      >
        <Header />

        <ToggleButtonGroup
          sx={{ pl: 5 }}
          value={flag}
          exclusive
          onChange={handleFlag}
        >
          <ToggleButton value="movies" disabled={flag === 'movies'}>
            Movies
          </ToggleButton>
          <ToggleButton value="tv shows" disabled={flag === 'tv shows'}>
            TV shows
          </ToggleButton>
        </ToggleButtonGroup>
        {flag === 'movies' ? <TopMovies /> : <TopTV />}
      </Box>
    </ThemeProvider>
  );
};


export default App;
