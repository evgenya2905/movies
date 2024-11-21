import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLazyGetTitlesGenresQuery } from '../store/movieApi';
import { RootState } from '../store/store';
import { GenreCard, Loader, WrapperGenres } from '../components';

export const TitlesGenres = () => {
  const [getTitlesGenres, { data, isFetching }] = useLazyGetTitlesGenresQuery();
  const category = useSelector((state: RootState) => state.switch.value);

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
