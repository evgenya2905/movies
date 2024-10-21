import { AppBar, Box, Toolbar, InputBase, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import { Lists } from './Lists';

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
            <ConnectedTvIcon fontSize="large" /> APPMOVTV
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
            <SearchIcon />
          </Box>
        </Toolbar>
        <Lists />
      </AppBar>
    </Box>
  );
};
