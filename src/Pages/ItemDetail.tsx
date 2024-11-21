import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, IconButton, Paper, Tooltip } from '@mui/material';
import {
  FavoriteBorder,
  Favorite,
  BookmarkBorder,
  Bookmark,
  Theaters,
} from '@mui/icons-material';
import {
  useToggleFavoriteTitleMutation,
  useToggleWatchlistTitleMutation,
  useLazyCheckStatusQuery,
  useLazyGetTitleByIdQuery,
} from '../store/movieApi';
import { Loader } from '../components';

export const ItemDetail = () => {
  const { category, id, title } = useParams();
  const [getTitleById, { data, isFetching }] = useLazyGetTitleByIdQuery();

  useEffect(() => {
    getTitleById({ id, category });
  }, [id, category]);

  const [checkStatus, { data: check }] = useLazyCheckStatusQuery();

  const [flagFavorite, setFlagFavorite] = useState(false);
  const [flagWatchlist, setFlagWatchlist] = useState(false);

  useEffect(() => {
    if (check?.favorite !== undefined && check?.watchlist !== undefined) {
      setFlagFavorite(check.favorite);
      setFlagWatchlist(check.watchlist);
    }
  }, [check]);

  const [toggleFavoriteTitle] = useToggleFavoriteTitleMutation();

  const addToFavorite = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (!category || !id) {
      console.error('Missing required parameters: category or id');
      return;
    }
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

  const deleteFromFavorite = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (!category || !id) {
      console.error('Missing required parameters: category or id');
      return;
    }
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

  const [toggleWatchlistTitle] = useToggleWatchlistTitleMutation();

  const addToWatchlist = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (!category || !id) {
      console.error('Missing required parameters: category or id');
      return;
    }
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

  const deleteFromWatchlist = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (!category || !id) {
      console.error('Missing required parameters: category or id');
      return;
    }
    try {
      await toggleWatchlistTitle({
        media_type: category,
        media_id: id,
        watchlist: false,
      });
      setFlagWatchlist(false);
      checkStatus({ category, id });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    checkStatus({ category, id });
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
          }}
        >
          {data?.poster_path ? (
            <img
              style={{ width: '20rem' }}
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
              alt={data.title}
            />
          ) : (
            <Theaters sx={{ fontSize: '15rem', color: 'white', pt: '2rem' }} />
          )}

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
                    <Favorite sx={{ color: 'primary.main' }} />
                  ) : (
                    <FavoriteBorder sx={{ color: 'secondary.main' }} />
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
                    <Bookmark sx={{ color: 'primary.main' }} />
                  ) : (
                    <BookmarkBorder sx={{ color: 'secondary.main' }} />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="h3">{title}</Typography>
            <Typography
              sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}
              component="div"
            >
              Production:{' '}
              {data?.production_countries.map((item) => (
                <Typography key={item.iso_3166_1}>{item.iso_3166_1}</Typography>
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
        </Box>
      )}
    </div>
  );
};
