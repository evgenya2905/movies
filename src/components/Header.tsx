import { AppBar, Box, Toolbar, InputBase, Typography } from '@mui/material';
import { Search, ConnectedTv } from '@mui/icons-material';

export const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
          }}
        >
          <Typography variant="h1">
            <ConnectedTv fontSize="large" /> APPMOVTV
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              paddingRight: 20,
            }}
          >
            <InputBase
              sx={{
                width: '250px',
                mb: 1.2,
              }}
              placeholder="search..."
            />
            <Search />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
