import {
  CardMedia,
  CardHeader,
  Card,
  Rating,
  IconButton,
  Box,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { IItem } from '../types/types';

export const Item = ({ poster_path, vote_average, title }: IItem) => {
  const url_img = `https://image.tmdb.org/t/p/w200${poster_path}`;

  function makeRate(num: number): number {
    let rate = num;
    return rate;
  }

  let newRate: number = makeRate(vote_average);

  return (
    <Card sx={{ cursor: 'pointer' }}>
      <Box sx={{ display: 'flex' }}>
        <IconButton>
          <FavoriteBorderIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <BookmarkBorderIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
      <CardHeader title={title} />
      <Rating size="small" value={newRate} max={10} precision={0.1} readOnly />
      <CardMedia component="img" src={url_img} />
    </Card>
  );
};
