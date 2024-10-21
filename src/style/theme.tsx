import { createTheme } from '@mui/material/styles';

const colors = {
  primaryMain: '#55286F',
  primaryDark: '#210B2C',
  primaryLight: '#6F448D',
  secondaryMain: '#B07AA8',
  secondaryDark: '#AE759F',
  secondaryLight: '#B27EB1',
  contrastColor: '#ffffff',
  error: '#d21919',
  backgroundDefault: '#d9cce8',
  backgroundForElements: '#BC96E6',
  textPrimary: '#050000',
  textSecondary: '#4d4848',
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryMain,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: colors.contrastColor,
    },
    secondary: {
      main: colors.secondaryMain,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
    },
    error: {
      main: colors.error,
    },
    background: {
      default: colors.backgroundDefault,
      paper: colors.contrastColor,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography: {
    fontFamily: '"Exo", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundColor: colors.secondaryMain,
          color: colors.contrastColor,
          border: `2px solid ${colors.secondaryDark}`,
          '&.Mui-selected': {
            backgroundColor: colors.secondaryMain,
            color: colors.contrastColor,
            textDecoration: 'underline',
            border: `2px solid ${colors.secondaryDark}`,
          },
          '&:hover': {
            backgroundColor: colors.secondaryMain,
            color: colors.primaryDark,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: colors.contrastColor,
          backgroundColor: colors.secondaryMain,
          borderRadius: '5px',
          border: '2px solid',
          borderColor: colors.secondaryDark,
          paddingLeft: '8px',

          '&.Mui-focused': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            borderColor: colors.primaryDark,
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          width: '16rem',
          height: '25rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '10px',
          backgroundColor: colors.backgroundForElements,
          border: `1px solid ${colors.primaryLight}`,
          background:
            'linear-gradient(0deg, rgba(176,122,168,1) 0%, rgba(85,40,111,1) 100%)',
        },
      },
    },

    MuiCardHeader: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          color: colors.contrastColor,

          '& .MuiCardHeader-title': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '200px',
          },
        },
      },
    },

    MuiCardMedia: {
      styleOverrides: {
        root: {
          maxHeight: '18rem',
          maxWidth: '12rem',
          paddingTop: '6px',
        },
      },
    },
  },
});

export default theme;
