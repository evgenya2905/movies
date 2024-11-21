import { Pagination } from '@mui/material';
import { ICount } from '../types/types';

export const Pages = (props: ICount) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.onChange(value);
  };

  return (
    <Pagination
      sx={{
        justifyContent: 'flex-end',
      }}
      count={props.count}
      page={props.page}
      color="secondary"
      showFirstButton
      showLastButton
      onChange={handleChange}
    />
  );
};
