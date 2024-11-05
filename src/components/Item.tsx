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
import TheatersIcon from '@mui/icons-material/Theaters';
import { IItem } from '../types/types';
import { Link } from 'react-router-dom';
import {
  useAddFavoriteTitleMutation,
  useAddWatchlistTitleMutation,
} from '../store/movieApi';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const Item = ({ poster_path, vote_average, title, id }: IItem) => {
  const url_img = `https://image.tmdb.org/t/p/w200${poster_path}`;

  function makeRate(num: number): number {
    let rate = num;
    return rate;
  }

  let newRate: number = makeRate(vote_average);

  const [addFavoriteTitle, { isLoading }] = useAddFavoriteTitleMutation();
  const [addWatchlistTitle, { isLoading: is }] = useAddWatchlistTitleMutation();

  const category = useSelector((state: RootState) => state.switch.value);
  console.log(category);

  const addToFavorite = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await addFavoriteTitle({
        media_type: category,
        media_id: id,
        favorite: true,
      });
      console.log('🚀 ~ addToWatchlist ~ id:', id);
    } catch (e) {
      console.error(e);
    }
  };

  const addToWatchlist = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      await addWatchlistTitle({
        media_type: category,
        media_id: id,
        watchlist: true,
      });
      console.log('🚀 ~ addToFavorite ~ id:', id);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card component={Link} to={`/${id}/${title}`} sx={{ cursor: 'pointer' }}>
      <Box sx={{ display: 'flex' }}>
        <IconButton type="submit" onClick={(event) => addToFavorite(event)}>
          <FavoriteBorderIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton type="submit" onClick={(event) => addToWatchlist(event)}>
          <BookmarkBorderIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
      <CardHeader title={title} />
      <Rating size="small" value={newRate} max={10} precision={0.1} readOnly />
      {poster_path ? (
        <CardMedia component="img" src={url_img} />
      ) : (
        <TheatersIcon sx={{ fontSize: '15rem', color: 'white', pt: '2rem' }} />
      )}
    </Card>
  );
};
