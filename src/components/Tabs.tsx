import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Box, Tab, Tabs as MuiTabs } from '@mui/material';
import { RootState } from '../store/store';
import { switchValue } from '../store/switchSlice';
import { changeTab } from '../store/changeTabSlice';
import { SwitchButton } from './';
import { FlagType, TabNameType } from '../types/types';

export const Tabs = () => {
  const flag = useSelector((state: RootState) => state.switch.value);
  const tabName = useSelector((state: RootState) => state.tab.value);

  const dispatch = useDispatch();

  const handleFlag = (
    _event: React.MouseEvent<HTMLElement>,
    newFlag: FlagType
  ) => {
    if (newFlag !== null) {
      dispatch(switchValue(newFlag));
    }
  };

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: TabNameType
  ) => {
    dispatch(changeTab(newValue));
  };

  const allowedRoutes = ['/', '/genres', '/favorite', '/watchlist'];
  const location = useLocation();

  return (
    <div>
      <Box sx={{ margin: '0' }}>
        <MuiTabs
          value={tabName}
          onChange={handleChange}
          variant="standard"
          aria-label="standard tabs"
          sx={{ justifyContent: 'center' }}
          TabIndicatorProps={{
            sx: {
              display: allowedRoutes.includes(location.pathname)
                ? 'block'
                : 'none',
            },
          }}
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
        </MuiTabs>
      </Box>

      <SwitchButton flag={flag} onChange={handleFlag} />
    </div>
  );
};
