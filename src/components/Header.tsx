import { AppBar, Box, Toolbar, InputBase, Typography } from '@mui/material';
import { Search, ConnectedTv } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useLazyGetTitlesBySearchQuery } from '../store/movieApi';
import { DropdownList } from './';

export const Header = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const [getTitlesBySearch, { data, isFetching }] =
    useLazyGetTitlesBySearchQuery();

  useEffect(() => {
    getTitlesBySearch(value);
  }, [value]);
  console.log(data);

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
              value={value}
              onChange={handleChange}
            />
            <Box
              sx={{
                backgroundColor: 'secondary.light',
                width: '250px',
                position: 'absolute',
                zIndex: '1',
                top: '50px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {data?.results.map(
                (item) =>
                  (item.media_type === 'movie' || item.media_type === 'tv') && (
                    <DropdownList
                      key={item.id}
                      id={item.id}
                      category={item.media_type}
                      title={
                        (item.media_type === 'movie' && item.title) ||
                        (item.media_type === 'tv' && item.name)
                      }
                      rate={item.vote_average}
                      onClick={() => setValue('')}
                    />
                  )
              )}
            </Box>
            <Search sx={{ color: 'white' }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
