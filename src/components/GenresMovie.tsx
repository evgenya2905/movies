import { useLazyGetGenresMovieQuery } from '../store/movieApi';
import { useEffect } from 'react';
import { GenreCard, Loader, WrapperGenres } from './';

export const GenresMovie = () => {
  const [getGenresMovie, { data, error, isFetching }] =
    useLazyGetGenresMovieQuery();

  useEffect(() => {
    getGenresMovie();
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
