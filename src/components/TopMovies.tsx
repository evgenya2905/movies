import { Item, Loader, Pages } from './';
import { useEffect, useState } from 'react';
import { useLazyGetTopMoviesQuery } from '../store/movieApi';

export const TopMovies = () => {
  const [getTopMovies, { data: movies, error, isFetching }] =
    useLazyGetTopMoviesQuery();

  const [page, setPage] = useState(1);
  const handleChangeFromChild = (value: number) => {
    setPage(value);
  };

  useEffect(() => {
    getTopMovies(page);
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
            gap: '30px',
            padding: '10px',
          }}
        >
          {movies?.results.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          ))}
        </div>
      )}

      <Pages
        count={movies?.total_pages}
        page={page}
        onChange={handleChangeFromChild}
      />
    </div>
  );
};
