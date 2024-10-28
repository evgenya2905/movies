import { Box, Tab, Tabs } from '@mui/material';
import { useState, useEffect } from 'react';
import { SwitchButton } from './';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { switchValue } from '../store/switchSlice';

export const Lists = () => {
  const flag = useSelector((state: RootState) => state.switch.value);
  const dispatch = useDispatch();

  const handleFlag = (
    event: React.MouseEvent<HTMLElement>,
    newFlag: string | null
  ) => {
    if (newFlag !== null) {
      dispatch(switchValue(newFlag));
    }
  };

  const location = useLocation();
  const [value, setValue] = useState('Top');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setValue('Top');
        break;
      case '/genres':
        setValue('Genres');
        break;
      case '/favorite':
        setValue('Favorite');
        break;
      case '/watchlist':
        setValue('Watchlist');
        break;
      default:
        setValue('Top');
    }
  }, [location.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ margin: '0' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable types of tabs"
          sx={{ justifyContent: 'center' }}
        >
          <Tab component={Link} to="/" label="Top" value="Top" />
          <Tab component={Link} to="/genres" label="Genres" value="Genres" />
          <Tab
            component={Link}
            to="/favorite"
            label="Favorite"
            value="Favorite"
          />
          <Tab
            component={Link}
            to="/watchlist"
            label="Watchlist"
            value="Watchlist"
          />
        </Tabs>
      </Box>

      <SwitchButton flag={flag} onChange={handleFlag} />
    </div>
  );
};
