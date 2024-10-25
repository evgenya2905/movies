import { Paper, Typography } from '@mui/material';

export const GenreCard = ({ name }: { name: string }) => {
  console.log(name);
  return (
    <div>
      <Paper elevation={10} sx={{ padding: '1rem', width: '10rem' }}>
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}
        >
          {name}
        </Typography>
      </Paper>
    </div>
  );
};
