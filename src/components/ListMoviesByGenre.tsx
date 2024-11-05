import { useParams } from 'react-router-dom';
import { useLazyGetTitleByGenreQuery } from '../store/movieApi';
import { useEffect, useState } from 'react';
import { Item, Loader, WrapperTopList, Pages } from './';
import { Typography } from '@mui/material';

export const ListMoviesByGenre = () => {
  const { category, genre, id } = useParams();
  console.log(category, genre, id);

  const [getTitleByGenre, { data, error, isFetching }] =
    useLazyGetTitleByGenreQuery();

  const [page, setPage] = useState(1);
  const handleChangeFromChild = (value: number) => {
    setPage(value);
  };
  useEffect(() => {
    getTitleByGenre({ id, category, page });
  }, [id, page]);

  console.log(data);
  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <div>
          <Typography variant="h3">{genre}</Typography>
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
