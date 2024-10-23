import { CircularProgress, Box } from '@mui/material';

export const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5rem',
        position: 'relative',
        height: '100vh',
      }}
    >
      <CircularProgress
        variant="determinate"
        value={100}
        size={100}
        thickness={4}
        sx={{
          color: '#e0e0e0',
          position: 'absolute',
        }}
      />

      <CircularProgress size={100} thickness={4} />
    </Box>
  );
};
