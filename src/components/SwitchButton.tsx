import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ISwitchButtonProps } from '../types/types';
import { useLocation } from 'react-router-dom';

export const SwitchButton = ({ flag, onChange }: ISwitchButtonProps) => {
  const location = useLocation();

  const allowedPaths = ['/', '/genres', '/favorite', '/watchlist'];
  const display = allowedPaths.includes(location.pathname) ? '' : 'none';

  return (
    <ToggleButtonGroup
      sx={{ pl: 5, mt: 2.5, display: `${display}` }}
      value={flag}
      exclusive
      onChange={onChange}
    >
      <ToggleButton value="movie" disabled={flag === 'movie'}>
        Movies
      </ToggleButton>
      <ToggleButton value="tv" disabled={flag === 'tv'}>
        TV shows
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
