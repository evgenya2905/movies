import { Item } from './Item';
import { useEffect } from 'react';
import { useLazyGetTopMoviesQuery } from '../store/movieApi';

export const TopMovies = () => {
  const [getTopMovies, { data: movies, error, isLoading }] =
    useLazyGetTopMoviesQuery();

  useEffect(() => {
    getTopMovies();
  }, []);

  console.log(movies);

  return (
    <div>
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
    </div>
  );
};
