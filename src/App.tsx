import { Header, Lists } from './components';
import { Box, ThemeProvider } from '@mui/material';
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
        <Lists />
      </Box>
    </ThemeProvider>
  );
};

export default App;
