import { useLazyGetWatchlistTitlesQuery } from '../store/movieApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategory } from '../store/selectors';
import { Loader, Pages, WrapperTopList, Item } from '../components';

export const TitlesWatchlist = () => {
  const [getWatchlistTitles, { data, error, isFetching }] =
    useLazyGetWatchlistTitlesQuery();

  const flag = useSelector(selectCategory);
  const category = flag === 'movie' ? 'movies' : 'tv';

  const [page, setPage] = useState(1);
  const handleChangeFromChild = (value: number) => {
    setPage(value);
  };

  useEffect(() => {
    getWatchlistTitles({ category, page });
  }, [category, page]);
  useEffect(() => {
    setPage(1);
  }, [flag]);

  console.log(data);
  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <WrapperTopList>
          {data?.results.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={flag === 'movie' ? item.title : item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          ))}
        </WrapperTopList>
      )}

      <Pages
        count={data?.total_pages}
        page={page}
        onChange={handleChangeFromChild}
      />
    </div>
  );
};
