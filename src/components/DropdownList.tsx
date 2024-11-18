import { useEffect, useState } from 'react';
import { useLazyGetTitlesBySearchQuery } from '../store/movieApi';
import { Link } from 'react-router-dom';
import { Item, Loader, Pages, WrapperTopList } from './';
import { Typography, Box, Divider } from '@mui/material';

export const DropdownList = ({
  id,
  title,
  category,
  rate,
  onClick,
}: {
  id: number;
  title: string;
  category: string;
  rate: number;
  onClick: () => void;
}) => {
  return (
    <Typography
      sx={{
        color: 'white',
        textDecoration: 'none',
        pl: 2,
        border: '1px solid',
        borderColor: 'primary.dark',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
      component={Link}
      to={`/${category}/${id}/${title}`}
      onClick={onClick}
    >
      {title} <br />({category === 'tv' ? 'tv show' : 'movie'}), {rate}
    </Typography>
  );
};
