import { useParams } from 'react-router-dom';
import { useLazyGetTitleByIdQuery } from '../store/movieApi';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Box, Typography } from '@mui/material';
import { Loader } from './Loader';

export const ItemDetail = () => {
  const { id, title } = useParams();

  const category = useSelector((state: RootState) => state.switch.value);

  const [getTitleById, { data, error, isFetching }] =
    useLazyGetTitleByIdQuery();
  console.log(data);

  useEffect(() => {
    getTitleById({ id, category });
  }, [id]);

  /* const url_img = `https://image.tmdb.org/t/p/original${data?.poster_path}`; */

  return (
    <div>
      {' '}
      {isFetching ? (
        <Loader />
      ) : (
        <Box sx={{ display: 'flex', pt: '1rem', pl: '1rem' }}>
          <img
            style={{ width: '20rem' }}
            src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
          />
          <Box sx={{ width: '40rem' }}>
            <Typography variant="h3">{title}</Typography>
            {data?.genres.map((item) => (
              <Typography key={item.id}>{item.name}</Typography>
            ))}

            <Typography variant="body2">
              About title <br />
              {data?.overview}
            </Typography>
          </Box>

          {/* {title} {id} */}
        </Box>
      )}
    </div>
  );
};
