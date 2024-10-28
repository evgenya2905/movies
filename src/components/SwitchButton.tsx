import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ISwitchButtonProps } from '../types/types';

export const SwitchButton = ({ flag, onChange }: ISwitchButtonProps) => {
  return (
    <ToggleButtonGroup
      sx={{ pl: 5, mt: 2.5 }}
      value={flag}
      exclusive
      onChange={onChange}
    >
      <ToggleButton value="movies" disabled={flag === 'movies'}>
        Movies
      </ToggleButton>
      <ToggleButton value="tv shows" disabled={flag === 'tv shows'}>
        TV shows
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
