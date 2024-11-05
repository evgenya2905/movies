import { Item, Loader, Pages, WrapperTopList } from '.';
import { useEffect, useState } from 'react';
import { useLazyGetTopTitlesQuery } from '../store/movieApi';
import { useSelector } from 'react-redux';
import { selectCategory } from '../store/selectors';

export const TitlesListTopRated = () => {
  const [getTopTitles, { data: movies, error, isFetching }] =
    useLazyGetTopTitlesQuery();
  console.log(movies);

  const [page, setPage] = useState(1);
  const handleChangeFromChild = (value: number) => {
    setPage(value);
  };

  const category = useSelector(selectCategory);

  useEffect(() => {
    getTopTitles({ category, page });
  }, [category, page]);

  useEffect(() => {
    setPage(1);
  }, [category]);

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <WrapperTopList>
          {movies?.results.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={category === 'movie' ? item.title : item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          ))}
        </WrapperTopList>
      )}

      <Pages
        count={movies?.total_pages}
        page={page}
        onChange={handleChangeFromChild}
      />
    </div>
  );
};
