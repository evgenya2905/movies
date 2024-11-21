import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardMedia, CardHeader, Card, Rating } from '@mui/material';
import TheatersIcon from '@mui/icons-material/Theaters';
import { RootState } from '../store/store';

export const Item = ({
  poster_path,
  vote_average,
  title,
  id,
}: {
  poster_path: string;
  title: string | undefined;
  vote_average: number;
  id: number;
}) => {
  const url_img = `https://image.tmdb.org/t/p/w200${poster_path}`;

  const category = useSelector((state: RootState) => state.switch.value);

  return (
    <Card
      component={Link}
      to={`/${category}/${id}/${title}`}
      sx={{ cursor: 'pointer', textDecoration: 'none' }}
    >
      <CardHeader title={title} />
      <Rating
        size="small"
        value={vote_average}
        max={10}
        precision={0.1}
        readOnly
      />
      {poster_path ? (
        <CardMedia component="img" src={url_img} />
      ) : (
        <TheatersIcon sx={{ fontSize: '15rem', color: 'white', pt: '2rem' }} />
      )}
    </Card>
  );
};
