import { Paper, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, UseSelector } from 'react-redux';
import { RootState } from '../store/store';

export const GenreCard = ({ name, id }: { name: string; id: number }) => {
  const category = useSelector((state: RootState) => state.switch.value);
  console.log(category);
  return (
    <div>
      <Box component={Link} to={`/genres/${category}/${name}/${id}`}>
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
      </Box>
    </div>
  );
};
