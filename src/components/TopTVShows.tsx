import { Item, Loader, Pages, WrapperTopList } from './';
import { useEffect, useState } from 'react';
import { useLazyGetTopTVQuery } from '../store/movieApi';

export const TopTVShows = () => {
  const [getTopTV, { data: tv, error, isFetching }] = useLazyGetTopTVQuery();

  const [page, setPage] = useState(1);
  const handleChangeFromChild = (value: number) => {
    setPage(value);
  };

  useEffect(() => {
    getTopTV(page);
  }, [page]);

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <WrapperTopList>
          {tv?.results.map((item) => (
            <Item
              key={item.id}
              title={item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          ))}
        </WrapperTopList>
      )}

      <Pages
        count={tv?.total_pages}
        page={page}
        onChange={handleChangeFromChild}
      />
    </div>
  );
};
