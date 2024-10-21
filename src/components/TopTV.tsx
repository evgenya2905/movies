import { Item } from './Item';
import { useEffect } from 'react';
import { useLazyGetTopTVQuery } from '../store/movieApi';

export const TopTV = () => {
  const [getTopTV, { data: tv, error, isLoading }] = useLazyGetTopTVQuery();

  useEffect(() => {
    getTopTV();
  }, []);

  console.log(tv);

  return (
    <div>
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
        )) || <div>No data available.</div>}
      </div>
    </div>
  );
};
