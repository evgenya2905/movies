import { Box } from '@mui/material';

export const WrapperGenres = ({ children }: any) => {
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