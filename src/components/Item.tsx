import { CardMedia, CardHeader, Card, Rating } from '@mui/material';
import { IItem } from '../types/types';

export const Item = ({ poster_path, vote_average, title }: IItem) => {
  const url_img = `https://image.tmdb.org/t/p/w200${poster_path}`;

  function makeRate(num: number): number {
    let rate = num;
    return rate;
  }

  let newRate: number = makeRate(vote_average);

  return (
    <Card>
      <CardHeader title={title} />
      <Rating size="small" value={newRate} max={10} precision={0.1} readOnly />
      <CardMedia component="img" src={url_img} />
    </Card>
  );
};
