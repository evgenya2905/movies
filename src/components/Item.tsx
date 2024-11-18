import { CardMedia, CardHeader, Card, Rating } from '@mui/material';
import TheatersIcon from '@mui/icons-material/Theaters';
import { IItem } from '../types/types';
import { Link } from 'react-router-dom';
import {
  useToggleFavoriteTitleMutation,
  useToggleWatchlistTitleMutation,
  useLazyCheckStatusQuery,
} from '../store/movieApi';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';

export const Item = ({ poster_path, vote_average, title, id }: IItem) => {
  const url_img = `https://image.tmdb.org/t/p/w200${poster_path}`;

  function makeRate(num: number): number {
    let rate = num;
    return rate;
  }

  let newRate: number = makeRate(vote_average);

  const [toggleFavoriteTitle, { isLoading }] = useToggleFavoriteTitleMutation();
  const [toggleWatchlistTitle, { isLoading: is }] =
    useToggleWatchlistTitleMutation();

  const category = useSelector((state: RootState) => state.switch.value);

  const [checkStatus, { data, isFetching }] = useLazyCheckStatusQuery();
  console.log(data);

  const addToFavorite = async (event: any) => {
    event.preventDefault();
    /*   event.stopPropagation(); */
    try {
      await toggleFavoriteTitle({
        media_type: category,
        media_id: id,
        favorite: true,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const deleteFromFavorite = async (event: any) => {
    event.preventDefault();
    /*   event.stopPropagation(); */
    try {
      await toggleFavoriteTitle({
        media_type: category,
        media_id: id,
        favorite: false,
      });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    checkStatus({ category, id });
  }, [data?.favorite]);

  const addToWatchlist = async (event: any) => {
    event.preventDefault();
    /*  event.stopPropagation(); */
    try {
      await toggleWatchlistTitle({
        media_type: category,
        media_id: id,
        watchlist: true,
      });
      console.log('🚀 ~ addToFavorite ~ id:', id);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteFromWatchlist = async (event: any) => {
    event.preventDefault();
    /*  event.stopPropagation(); */
    try {
      await toggleWatchlistTitle({
        media_type: category,
        media_id: id,
        watchlist: false,
      });
      console.log('🚀 ~ addToFavorite ~ id:', id);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card
      component={Link}
      to={`/${category}/${id}/${title}`}
      sx={{ cursor: 'pointer', textDecoration: 'none' }}
    >
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
