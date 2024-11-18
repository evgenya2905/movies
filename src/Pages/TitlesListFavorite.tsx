import { useEffect, useState } from 'react';
import { useLazyGetFavoriteTitlesQuery } from '../store/movieApi';
import { useSelector } from 'react-redux';
import { selectCategory } from '../store/selectors';
import { Loader, WrapperTopList, Item, Pages } from '../components';

export const TitlesListFavorite = () => {
  const [getFavoriteTitles, { data, error, isFetching }] =
    useLazyGetFavoriteTitlesQuery();
  console.log(data);

  const flag = useSelector(selectCategory);
  const category = flag === 'movie' ? 'movies' : 'tv';

  const [page, setPage] = useState(1);
  const handleChangeFromChild = (value: number) => {
    setPage(value);
  };

  useEffect(() => {
    getFavoriteTitles({ category, page });
  }, [flag, page]);
  useEffect(() => {
    setPage(1);
  }, [flag]);

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
