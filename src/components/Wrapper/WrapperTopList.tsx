import { ReactNode } from 'react';
import { Box } from '@mui/material';

export const WrapperTopList = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: '30px',
        padding: '10px',
      }}
    >
      {children}
    </Box>
  );
};
