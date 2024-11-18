import { useParams } from 'react-router-dom';
import { useLazyGetTitleByIdQuery } from '../store/movieApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Tooltip,
  Divider,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Loader } from '../components';
import { selectCategory } from '../store/selectors';
import {
  useToggleFavoriteTitleMutation,
  useToggleWatchlistTitleMutation,
  useLazyCheckStatusQuery,
} from '../store/movieApi';

export const ItemDetail = () => {
  const { category, id, title } = useParams();
  /* const category = useSelector(selectCategory); */

  const [getTitleById, { data, error, isFetching }] =
    useLazyGetTitleByIdQuery();
  console.log(data);

  useEffect(() => {
    getTitleById({ id, category });
  }, [id, category]);

  const [checkStatus, { data: check }] = useLazyCheckStatusQuery();

  const [flagFavorite, setFlagFavorite] = useState(false);
  console.log(flagFavorite);
  const [flagWatchlist, setFlagWatchlist] = useState(false);
  console.log(flagWatchlist);

  useEffect(() => {
    if (check?.favorite !== undefined && check?.watchlist !== undefined) {
      setFlagFavorite(check.favorite);
      setFlagWatchlist(check.watchlist);
    }
  }, [check]);

  const [toggleFavoriteTitle, { isLoading }] = useToggleFavoriteTitleMutation();
  const addToFavorite = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      await toggleFavoriteTitle({
        media_type: category,
        media_id: id,
        favorite: true,
      });
      setFlagFavorite(true);
      checkStatus({ category, id });
    } catch (e) {
      console.error(e);
    }
  };

  const deleteFromFavorite = async (event: any) => {
    event.preventDefault();
    try {
      await toggleFavoriteTitle({
        media_type: category,
        media_id: id,
        favorite: false,
      });
      setFlagFavorite(false);
      checkStatus({ category, id });
    } catch (e) {
      console.error(e);
    }
  };

  const [toggleWatchlistTitle, { isLoading: is }] =
    useToggleWatchlistTitleMutation();

  const addToWatchlist = async (event: any) => {
    event.preventDefault();

    try {
      await toggleWatchlistTitle({
        media_type: category,
        media_id: id,
        watchlist: true,
      });
      setFlagWatchlist(true);
      checkStatus({ category, id });
    } catch (e) {
      console.error(e);
    }
  };

  const deleteFromWatchlist = async (event: any) => {
    event.preventDefault();

    try {
      await toggleWatchlistTitle({
        media_type: category,
        media_id: id,
        watchlist: false,
      });
      setFlagWatchlist(false);
      checkStatus({ category, id });
      console.log('🚀 ~ addToFavorite ~ id:', id);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    checkStatus({ category, id });
    console.log(check);
  }, [category, id, checkStatus]);

  return (
    <div>
      {' '}
      {isFetching ? (
        <Loader />
      ) : (
        <Box
          sx={{
            display: 'flex',
            pt: '2rem',
            pl: '4rem',
            gap: '2rem',
            /* justifyContent: 'center', */
          }}
        >
          <img
            style={{ width: '20rem' }}
            src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
          />
          <Box
            sx={{
              width: '50rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <Tooltip
                title={
                  flagFavorite ? 'Remove from favorite' : 'Add to favorite'
                }
                placement="top"
              >
                <IconButton
                  type="submit"
                  onClick={
                    flagFavorite
                      ? (event) => deleteFromFavorite(event)
                      : (event) => addToFavorite(event)
                  }
                >
                  {check?.favorite ? (
                    <FavoriteIcon sx={{ color: 'primary.main' }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ color: 'secondary.main' }} />
                  )}
                </IconButton>
              </Tooltip>

              <Tooltip
                title={
                  flagWatchlist ? 'Remove from watchlist' : 'Add to watchlist'
                }
                placement="top"
              >
                <IconButton
                  type="submit"
                  onClick={
                    flagWatchlist
                      ? (event) => deleteFromWatchlist(event)
                      : (event) => addToWatchlist(event)
                  }
                >
                  {check?.watchlist ? (
                    <BookmarkIcon sx={{ color: 'primary.main' }} />
                  ) : (
                    <BookmarkBorderIcon sx={{ color: 'secondary.main' }} />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="h3">{title}</Typography>
            <Typography
              sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}
            >
              Production:{' '}
              {data?.production_countries.map((item) => (
                <Typography>{item.iso_3166_1}</Typography>
              ))}
            </Typography>

            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
            >
              {data?.genres.map((item) => (
                <Paper
                  key={item.id}
                  sx={{ width: 'fit-content', pr: '0.5rem', pl: '0.5rem' }}
                >
                  <Typography>{item.name}</Typography>
                </Paper>
              ))}
            </Box>
            {data?.overview ? (
              <Typography variant="h5">About title</Typography>
            ) : (
              ''
            )}
            <Typography>{data?.overview}</Typography>
          </Box>

          {/* {title} {id} */}
        </Box>
      )}
    </div>
  );
};
