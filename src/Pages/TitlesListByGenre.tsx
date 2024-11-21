import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useLazyGetTitleByGenreQuery } from '../store/movieApi';
import { Item, Loader, WrapperTopList, Pages } from '../components';

export const TitlesListByGenre = () => {
  const { category, genre, id } = useParams();
  const [getTitleByGenre, { data, isFetching }] = useLazyGetTitleByGenreQuery();

  const [page, setPage] = useState(1);
  const handleChangeFromChild = (value: number) => {
    setPage(value);
  };
  useEffect(() => {
    getTitleByGenre({ id, category, page });
  }, [id, page]);

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <div>
          <Typography variant="h3" sx={{ textAlign: 'center', p: '0.5rem' }}>
            {genre}
          </Typography>
          <WrapperTopList>
            {data?.results.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                title={category === 'movie' ? item.title : item.name}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            ))}
          </WrapperTopList>
        </div>
      )}

      <Pages
        count={
          data?.total_pages && data.total_pages > 500 ? 500 : data?.total_pages
        }
        page={page}
        onChange={handleChangeFromChild}
      />
    </div>
  );
};
