import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useLazyGetTopTitlesQuery } from '../store/movieApi';
import { Item, Loader, Pages, WrapperTopList } from '../components';

export const TitlesListTopRated = () => {
  const [getTopTitles, { data, isFetching }] = useLazyGetTopTitlesQuery();

  const [page, setPage] = useState(1);
  const handleChangeFromChild = (value: number) => {
    setPage(value);
  };

  const category = useSelector((state: RootState) => state.switch.value);

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
          {data?.results.map((item) => (
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
        count={data?.total_pages}
        page={page}
        onChange={handleChangeFromChild}
      />
    </div>
  );
};
