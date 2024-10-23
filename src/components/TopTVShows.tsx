import { Item, Loader, Pages } from '.';
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
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: '10px',
          }}
        >
          {tv?.results.map((item) => (
            <Item
              key={item.id}
              title={item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          ))}
        </div>
      )}

      <Pages
        count={tv?.total_pages}
        page={page}
        onChange={handleChangeFromChild}
      />
    </div>
  );
};
