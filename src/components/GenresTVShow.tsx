import { useLazyGetGenresTVShowQuery } from '../store/movieApi';
import { useEffect } from 'react';
import { GenreCard, Loader, WrapperGenres } from './';

export const GenresTVShow = () => {
  const [getGenresTVShow, { data, error, isFetching }] =
    useLazyGetGenresTVShowQuery();

  useEffect(() => {
    getGenresTVShow();
  }, []);

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <WrapperGenres>
          {data?.genres.map((item) => (
            <GenreCard key={item.id} name={item.name} />
          ))}
        </WrapperGenres>
      )}
    </div>
  );
};
