import { ReactNode } from 'react';
import { Box } from '@mui/material';

export const WrapperGenres = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        margin: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'space-between',
        gap: '1.5rem',
        flexWrap: 'wrap',
      }}
    >
      {children}
    </Box>
  );
};
