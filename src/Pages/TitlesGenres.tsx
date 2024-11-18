import { useLazyGetTitlesGenresQuery } from '../store/movieApi';
import { useEffect } from 'react';
import {
  GenreCard,
  Loader,
  WrapperGenres,
  ListMoviesByGenre,
} from '../components';
import { useSelector } from 'react-redux';
import { selectCategory } from '../store/selectors';

export const TitlesGenres = () => {
  const [getTitlesGenres, { data, error, isFetching }] =
    useLazyGetTitlesGenresQuery();

  const category = useSelector(selectCategory);

  useEffect(() => {
    getTitlesGenres({ category });
  }, [category]);

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <WrapperGenres>
          {data?.genres.map((item) => (
            <GenreCard key={item.id} id={item.id} name={item.name} />
          ))}
        </WrapperGenres>
      )}
    </div>
  );
};
