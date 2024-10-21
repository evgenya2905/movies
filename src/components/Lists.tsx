import { Box, List, ListItem } from '@mui/material';

export const Lists = () => {
  return (
    <Box>
      <List
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <ListItem sx={{ width: 'fit-content' }}>Top</ListItem>
        <ListItem sx={{ width: 'fit-content' }}>Genres</ListItem>
        <ListItem sx={{ width: 'fit-content' }}>Favorite</ListItem>
        <ListItem sx={{ width: 'fit-content' }}>Watchlist</ListItem>
      </List>
    </Box>
  );
};
